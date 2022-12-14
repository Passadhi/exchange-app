import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { useOperationContext } from '../Context/operationContext';

const ModalWindow = function ModalWindow({ show, currentPairIndex, buy_or_sell, buy_sell_course_values, setShow }) {
    const { operation, setOperation } = useOperationContext()
    const handleClose = () => setShow(false);
    const [volume, setVolume] = useState(0);
    const handleCreatingVolume = (e) => {
        setVolume(e.target.value)
    }
    console.log(volume)
    const handleCreatingOperation = ((e) => {
        if (volume) {
        buy_or_sell ? (setOperation(prev => [...prev, {
            'id': operation.length + 1, 'Side': 'BUY', 'Instrument': buy_sell_course_values[currentPairIndex][0],
            'Price': String(buy_sell_course_values[currentPairIndex][1][0]).slice(0, 5), 'Volume': volume, 'Timestamp': new Date().toLocaleString()
        }])) :
            (setOperation(prev => [...prev, {
                'id': operation.length + 1, 'Side': 'SELL', 'Instrument': buy_sell_course_values[currentPairIndex][0],
                'Price': String(buy_sell_course_values[currentPairIndex][1][1]).slice(0, 5), 'Volume': volume, 'Timestamp': new Date().toLocaleString()
            }]))
        handleClose()
        }
    })
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Exchange currency</Modal.Title>
            </Modal.Header>
            {buy_or_sell  ? <Modal.Body><div>BUY {buy_sell_course_values[currentPairIndex][0]} {String(buy_sell_course_values[currentPairIndex][1][0]).slice(0, 5)}</div>
                <p></p>
                <Form>
                    <Form.Group onChange={handleCreatingVolume} value={volume} className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control
                            type="number"
                            autoFocus
                        />
                    </Form.Group>
                </Form>

            </Modal.Body> : <Modal.Body>SELL {buy_sell_course_values[currentPairIndex][0]} {String(buy_sell_course_values[currentPairIndex][1][1]).slice(0, 5)}
                <p></p>
                <Form>
                    <Form.Group onChange={handleCreatingVolume} value={volume} className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control
                            type="number"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={handleCreatingOperation}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>


    )
}

export default ModalWindow


