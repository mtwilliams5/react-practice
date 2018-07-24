import React from 'react';

const Button = (props) => {
  const class_name = props.class_name ? `btn btn-${props.class_name}` : 'btn btn-primary';
  const button_type = props.type ? props.type : 'button';
  // The above is shorthand for:
  // if (props.type !== undefined) { button_type = props.type } else { button_type = 'button' }

  return (
    <button type={button_type} className={class_name}>{props.text}</button>
  )
}

export default Button;