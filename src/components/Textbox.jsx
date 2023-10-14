import React, { useState } from 'react'
import copy from './images/copyicon.png';


//Textbox component
function Textbox() {
    let textbox,answer,temporary,firstletter,finalletter,userstringrep,userstringrem,copybtn;
    let [words,setWords] = useState(0);
    let [characters,setCharacters] = useState(0);
    let [sentences,setSentences] = useState(0);
    let [readingtime,setReadingtime] = useState(0);
    
    
    //functions to uppercase
    
    let uppercase = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      textbox.value = textbox.value.toUpperCase(); 
    }
    
    //functions to lowercase
    
    let lowercase = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      textbox.value = textbox.value.toLowerCase(); 
    }
    
    //functions to sentencecase
    
    let sentencecase = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      answer = textbox.value;
      answer = answer.split(" ");
      answer = answer.filter(word => word!="");
      answer = answer.map(word => {
          firstletter = word.charAt(0).toUpperCase();
          temporary = word.slice(1).toLowerCase();
          finalletter = firstletter + temporary;
          
          return finalletter;
      })

      textbox.value = answer.join(" ");
    }

     //functions to clear
    
     let clear = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      textbox.value = "";
    }
    
     //functions to clear
    
     let replace = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      
      userstringrem = prompt("Enter the word which will be replaced:");
      userstringrep = prompt("Enter the word new word:");
      
      let upperword = userstringrem.toUpperCase();
      let lowerword = userstringrem.toLowerCase();
      
      temporary = textbox.value.replaceAll(upperword,userstringrep);
      temporary = textbox.value.replaceAll(userstringrem,userstringrep);
      temporary = textbox.value.replaceAll(lowerword,userstringrep);
      textbox.value = temporary;
      
    }

    //function for the copy button
    let copytext = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      copybtn = document.getElementsByTagName("img")[0];

         // Select the text in the textarea
         textbox.select();
         textbox.setSelectionRange(0, 99999); // For mobile devices
 
         // Copy the selected text to the clipboard
         document.execCommand('copy');
 
         // Deselect the text
         window.getSelection().removeAllRanges();
 
         // Alert the user
         alert('Text has been copied to the clipboard');
    }

    //remove the extrabackspaces from the text
    let extrabackspaces = ()=>{
      textbox = document.getElementsByName('userinput')[0];
      answer = textbox.value;
      answer = answer.split(" ");
      answer = answer.filter(word => word!="");
      answer = answer.join(" ");
      textbox.value = answer;
    }
    
    //function to update the text info
    let updatetextinfo = ()=>{
      
      //writing the word logic here
     textbox = document.getElementsByName("userinput")[0];
     answer = textbox.value;
     answer = answer.split(" ");
     answer = answer.filter(word => word!="" && word.length>1);
     setWords(answer.length);

     //writing the letter logic here!
     setCharacters(textbox.value.length);

     //writing the logic of sentences here
     answer = textbox.value;
     if(answer.length==0)
     setSentences(0);

     
    if(answer.includes("."))
    {
      
      answer = answer.split(".");
      answer = answer.filter(sentence => sentence!="")
      answer = answer.filter(sentence => {

                //here we remove all the spaces
                let wordsofsentence = sentence.split(" ");
                
                //here we remove all the "" characters
                wordsofsentence = wordsofsentence.filter(wos => wos!="");
                
                //after that if the wordsofsentence is > 0 means it does not contain only spaces
                if(wordsofsentence.length > 0)
                return sentence;
          })
          setSentences(answer.length);
    }

    //update the readtime!
     if(textbox.value.length > 0)
     {
       answer = String(textbox.value.length/300);
       answer = answer.slice(0,6);
       
       setReadingtime(answer);
     }
 
     else
     setReadingtime(0);
}

   
  return (
    <>
        <textarea autoFocus name='userinput' onChange={updatetextinfo} rows="10" className='block w-full px-5 pt-16 mx-auto mt-6 resize-y outline outline-2 outline-blue-500'></textarea>
        <img onClick={copytext} className='absolute h-8 cursor-pointer right-4 top-28 laptop:top-44 mobile:top-32 mobile-xs:top-40' src={copy}></img>
          <ul className='flex flex-wrap justify-between max-w-4xl gap-6 mx-auto mt-6 text-2xl font-semibold tablet:justify-center'>
            <li>Words : {words}</li>
            <li>Characters : {characters}</li>
            <li>Sentences : {sentences}</li>
            <li>Readtime : {readingtime} minutes</li>
          </ul>
          
          {/* buttons */}

          <ul className='flex flex-row flex-wrap justify-center gap-8 mt-10'>
             <li>
              <button onClick={uppercase} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>uppercase</button>
             </li>
             <li>
              <button onClick={lowercase} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>lowercase</button>
             </li>
             <li>
              <button onClick={sentencecase} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>sentence case</button>
             </li>
             <li>
              <button onClick={clear} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>clear</button>
             </li>
             <li>
              <button onClick={replace} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>replace</button>
             </li>
             <li>
              <button onClick={extrabackspaces} className={`px-5 py-3 text-xl font-semibold tracking-widest text-white uppercase bg-blue-600 rounded shadow-md shadow-black active:bg-blue-800`}>extra backspaces</button>
             </li>
          </ul>
    </>
  )
}

export default Textbox;


