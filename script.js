function verificador() {
  let data = new Date()
  let ano = data.getFullYear()
  let form = document.getElementById('ano')
  let resul = document.querySelector('div#resul')

  //VERIFICAR SE ANO É NULO OU MAIOR QUE ANO ATUAL
  if(form.value.length == 0 || Number(form.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
  }
  else {
    let sexo = document.getElementsByName('genero') //0 Masculino - 1 Feminino
    let idade = ano - Number(form.value)
    let genero = '' //começou como string vazia, para receber valor depois da verificação do radio checked
    //CREATE ELEMENTO
    let img = document.createElement('img') //criando img (como se tiver fazendo no html <img>)
    //ATRIBUIR ALGO AO ELEMENTO CRIADO
    img.setAttribute('id', 'foto') //com id foto (como se tivesse fazendo no html <img id='foto'>)

    if(sexo[0].checked){ //Radius na posição 0(homem) for marcado
      genero = 'Homem'
      if(idade >=0 && idade < 4){
        //BEBE
        img.setAttribute('src', 'bebe-homem.jpg') //seria a mesma coisa de passar o caminho da foto
      }else if(idade < 12){
        //CRIANÇA
        img.setAttribute('src', 'crianca-homem.jpg')
      }else if(idade < 20){
        //JOVEM
        img.setAttribute('src', 'jovem-homem.jpg')
      }else if(idade < 50){
        //ADULTO
        img.setAttribute('src', 'adulto-homem.jpg')
      }else{
        //ANTIGO
        img.setAttribute('src', 'idoso-homem.jpg')
      }
    }else{
      genero = 'Mulher'
      if(idade >=0 && idade < 4){
        //BEBE
        img.setAttribute('src', 'bebe-mulher.jpg')
      }else if(idade < 12){
        //CRIANÇA
        img.setAttribute('src', 'crianca-mulher.jpg')
      }else if(idade < 20){
        //JOVEM
        img.setAttribute('src', 'jovem-mulher.jpg')
      }else if(idade < 50){
        //ADULTO
        img.setAttribute('src', 'adulta-mulher.jpg')
      }else{
        //ANTIGO
        img.setAttribute('src', 'idosa-mulher.jpg')
      }
    }
    resul.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    
    //PRA MOSTRAR A IMG CRIANDO NO JS
    resul.appendChild(img)
  }
}