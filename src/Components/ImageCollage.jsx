import { useState } from 'react';
import { Modal, Image } from 'react-bootstrap';

const ImageCollage = ({ images }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = (img) => {
    setSelected(img);
    setShow(true);
  };

  return (
    <>
      {/* Updated grid container with fixed 2x2 layout */}
      <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '8px'
      }}>
        {images?.map((img, index) => (
            <div key={index} style={{ width: '100%', height: '150px' }}>
              <Image 
                src={img} 
                thumbnail 
                onClick={() => handleClick(img)} 
                className="collage-img"
                style={{ 
                  cursor: 'pointer', 
                  objectFit: 'contain', 
                  width: '100%', 
                  height: '100%' 
                }}
              />
            </div>
        ))}
      </div>
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Body>
          <Image src={selected} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageCollage;
