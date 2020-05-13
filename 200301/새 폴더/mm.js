fetch("http://apiland.site:81/kr_corona")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const { lastBuildDate, Confirmator, Cured, Dead, Inspection } = myJson;
    const text = `최종수정일 : ${lastBuildDate}, 확진자 : ${Confirmator}, 완치자 : ${Cured}, 사망자 : ${Dead}, 의심환자 : ${Inspection}`;
    document.getElementById("target").innerHTML = lastBuildDate;
    // var printTarget = document.getElementById("target");
    // printTarget.innerHTML = "원하는 텍스트. 텍스트 형태라면 뭐든 가능합니다.";
  });
