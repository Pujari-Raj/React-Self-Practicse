import React, { useState } from 'react'
import MyModal from './MyModal';

const Modal = () => {

    const [ShowModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

  return (
    <div>
        <button className='model-btn' onClick={() => setShowModal(true)}>Open Modal</button>
        {ShowModal && <MyModal closeModal = {closeModal} />}
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br /> <br/> <br/> <br/> <br/>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Modal