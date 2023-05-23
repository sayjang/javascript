// Quiz

const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };
  
  
//   function changeColor({styles}) {
//     let {size,color} = styles;
//     console.log(color);
//   }


  function changeColor({name,styles:{color}}) {
    //let {size,color} = styles;
    console.log(color);
  }
  
  changeColor(prop);