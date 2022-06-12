function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zYFN2UfSg/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error){
console.error(error);
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img= document.getElementById("Lion_Image");
        img1= document.getElementById("Bird_Image");
        img2= document.getElementById("Dog_Image");

        function lion_hider() {
            var lion_visibility= document.getElementById("lion");
            if (lion_visibility.style.display === "none") {
              
            } else{
                lion_visibility.style.display = "none"
            }
          }

          function dog_hider() {
            var dog_visibility= document.getElementById("dog");
            if (dog_visibility.style.display === "none") {
              
            } else{
                dog_visibility.style.display ="none"
            }
          }

          function bird_hider() {
            var bird_visibility= document.getElementById("bird");
            if (bird_visibility.style.display === "none") {
              
            } else{
                bird_visibility.style.display ="none"
            }
          }
        

        if (results[0].label=="Lion") {
            bird_hider()
            dog_hider()
            
        } else if (results[0].label=="Bird") {
            dog_hider()
            lion_hider()
            
        } else  {
            lion_hider()
            bird_hider()
            
        }
    }
}
