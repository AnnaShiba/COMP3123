const gretter = (myArray, counter) => {
    const greetText = 'Hello ';
    
    for (const item of myArray) {
      console.log(`${greetText}${item}`);
    }
  };
  
  gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  