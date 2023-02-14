import { useState } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { Modal } from 'antd';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

  const handleComplete = (address: Address) => {
    console.log('주소 선택 완료', address);
    setIsOpen(false);
    setAddress(address.address);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <p>{address}</p>
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
