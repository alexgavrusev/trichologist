import React, { FC } from "react";
import {
  Fade,
  SlideFade,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/core";

type Props = {
  heading: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
};

const trapFocus = process.env.NODE_ENV !== "test";

const CtaModal: FC<Props> = ({ heading, body, isOpen, onClose }) => {
  return (
    <Fade timeout={300} in={isOpen}>
      {(overlayStyle) => (
        <Modal trapFocus={trapFocus} isOpen onClose={onClose} isCentered>
          <ModalOverlay style={overlayStyle} px={4}>
            <SlideFade timeout={150} in={isOpen} unmountOnExit={false}>
              {(contentStyle) => (
                <ModalContent style={contentStyle}>
                  <ModalHeader>{heading}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>{body}</ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>OK</Button>
                  </ModalFooter>
                </ModalContent>
              )}
            </SlideFade>
          </ModalOverlay>
        </Modal>
      )}
    </Fade>
  );
};

export default CtaModal;
