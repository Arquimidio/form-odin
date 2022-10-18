function validator({
  element,
  display,
  validators = []
}){
  const validationFunctions = []
  for (const prop of validators){
    const fn = () => {
      if (prop.kind in element.validity) {
        if (element.validity[prop.kind]) {
          element.setCustomValidity(prop.message)
          display.textContent = prop.message
          return true
        }

        return false
      }
    }
    validationFunctions.push(fn)
  }
  
  element.addEventListener("blur", () => {
    let noValidationErrors = true;
    validationFunctions.forEach(fn => {
      if(fn()){
        noValidationErrors = false;
      }
    })

    if(noValidationErrors){
      element.setCustomValidity("")
      display.textContent = ""
    }
  })
}