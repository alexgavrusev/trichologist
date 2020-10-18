const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const gatsbyModuleExclude = [/node_modules\/(?!(gatsby)\/)/];

const jsPresets = [
  // use @babel/preset-react for JSX and env (instead of staged presets)
  require.resolve("@babel/preset-react"),
  [require.resolve("@babel/preset-env"), { targets: { esmodules: true } }],
];

const tsPresets = [...jsPresets, require.resolve("@babel/preset-typescript")];

const sharedPlugins = [
  // use @babel/plugin-proposal-class-properties for class arrow functions
  require.resolve("@babel/plugin-proposal-class-properties"),
  // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
  require.resolve("babel-plugin-remove-graphql-queries"),
];

const babelLoader = require.resolve("babel-loader");

const resolveModules = [path.resolve(__dirname, "src"), "node_modules"];

const jsRegex = /\.(js|jsx)$/;
const tsRegex = /\.(ts|tsx)$/;

const plugins = [
  new CopyPlugin({
    patterns: [{ from: "public/static", to: "static" }],
  }),
  new Dotenv(),
];

module.exports = {
  components: "./src/playroom-exports.ts",
  outputPath: "./playroom-static",

  widths: [320, 479, 480, 767, 768, 991, 992, 1279, 1280],
  openBrowser: false,
  frameComponent: "./src/components/playroom-frame/index.tsx",

  exampleCode: `
  <Flex
    bg={["red.500", "green.500", "blue.500", "yellow.500", "pink.500"]}
    minHeight="100vh"
    justify="center"
    align="center"
  >
    <Heading size="2xl">Hello</Heading>
  </Flex>
`,

  webpackConfig: () => ({
    module: {
      rules: [
        {
          // Config for js and jsx files
          test: jsRegex,
          use: [
            {
              loader: babelLoader,
              options: {
                presets: jsPresets,
                plugins: sharedPlugins,
              },
            },
          ],
          exclude: gatsbyModuleExclude,
        },
        {
          // Config for tsx files
          test: tsRegex,
          use: [
            {
              loader: babelLoader,
              options: {
                presets: tsPresets,
                plugins: sharedPlugins,
              },
            },
          ],
          exclude: gatsbyModuleExclude,
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: resolveModules,
    },

    plugins,
  }),
};
