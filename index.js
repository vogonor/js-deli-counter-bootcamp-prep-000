function takeANumber(currentLineOfPeople, newPerson) {
  
  var message = ""
  var positionInLine = 0

    if(currentLineOfPeople.length === 0) {
      positionInLine = 1
      currentLineOfPeople.push(newPerson)
      message = `Welcome, ${newPerson}. You are number 1 in line.`
    
    }else {
        
        currentLineOfPeople.push(newPerson)
        positionInLine =  currentLineOfPeople.indexOf(newPerson) + 1
        
        message = `Welcome, ${newPerson}. You are number ${positionInLine} in line.`
    }
  return message
}

function nowServing (currentLineOfPeople){
  var message = ""
  var firstInLine = ""
  
  if(currentLineOfPeople.length === 0){
    message = "There is nobody waiting to be served!"
    
  } else {
       firstInLine = currentLineOfPeople.shift()
      message = "Currently serving "+ firstInLine+"."
  }
  
  return message
}

function currentLine(currentLineOfPeople) {
   var peopleStr =""
     var message = ""
     var myMessage = "" 
     const stringArr = []
    
         for (var i = 0; i < currentLineOfPeople.length; i++){
             if( currentLineOfPeople.length === 0){
               message = "The line is currently empty."
        
              } else {
            peopleStr = `${i+1}. ${currentLineOfPeople[i]}`
            stringArr.push(peopleStr)
            // message ="The line is currently:"
        }
    
        var myArrayStr = stringArr.join(", ")
         message = `The line is currently: ${myArrayStr}`
         // stringArr.unshift(message)
    
   //   var lastStr =  `${message} ${myListStr}`
   // var lastStr = myListStr.replace(",", " ")
    // var thisStr = message.replace("currently:,","currently:")
     return message
 }