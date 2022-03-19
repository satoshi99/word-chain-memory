import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { gameStep } from '../lib/recoil-atoms';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const FinishModal = ({ isOpen, onClose }: Props) => {
  const step = useRecoilValue(gameStep);
  const router = useRouter();
  const modalOnClick = () => {
    if (step.value == 'recall') {
      router.push('recall');
    } else {
      router.push('result');
    }
  };

  const finishWordChainBody = (
    <Text>
      Next is the memory step. <br />
      How many words that you have chained do you remember them ?
      <br />
      However you must list the wards in reverse order.
      <br />
      Click the Next button to go to the memory step.
    </Text>
  );

  const finishRecallBody = (
    <Text>
      Nice work!
      <br />
      Let&apos;s check the result.
      <br />
      Click the button to go to the result page.
    </Text>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="3xl">Finish !!</ModalHeader>
        <ModalBody>
          {step.value === 'recall' ? finishWordChainBody : finishRecallBody}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="teal" onClick={modalOnClick}>
            {step.value === 'recall' ? 'Next' : 'Result'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
