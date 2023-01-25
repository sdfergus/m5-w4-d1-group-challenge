import React from 'react';

function Contacts( props ) {
  // console.log( 'Props in list: ', props.contactsData.data );

  let listrows = [];
  props.contactsData.data.forEach( element => {
    listrows.push(
      <tr key={element.id}>
        <td className='text-start'>
          <span className='fw-bold'>{element.name}</span> <br />
          {element.email} <br />
          {element.company.catchPhrase}</td>
      </tr>
    )
  } );
  return (
    <table className='table table-striped justify-content-left'>
      <thead>
        <th className='text-center'><h1>Contact List</h1></th>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  )
}

export default Contacts;