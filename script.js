// ============================
// ABRIR SOBRE
// ============================

function abrirCarta(){

    const sobre = document.querySelector(".sobre");

    sobre.innerHTML = "💖";

    setTimeout(()=>{

        sobre.innerHTML="💌";

    },800);

}



// ============================
// ENTRAR A LA CARTA
// ============================

function entrar(){

    const inicio = document.querySelector(".inicio");


    inicio.style.animation="desaparecer 1s forwards";


    setTimeout(()=>{


        inicio.style.display="none";


        mostrarCarta();


    },1000);


}




// ============================
// CARTA
// ============================


function mostrarCarta(){


document.body.insertAdjacentHTML("beforeend",`

<section class="carta">

<div class="contenido">

<h1>
Para ti Hanna ❤️
</h1>


<p>
Hice esta página porque quiero recordarte
cada día lo importante que eres para mí.
Gracias por todos los momentos,
las risas y todo lo que hemos vivido juntos.
</p>


<button onclick="mostrarRazones()">

Ver las razones por las que te amo ❤️

</button>


</div>

</section>

`);


}



// ============================
// 100 RAZONES
// ============================


const razones=[


"Tu sonrisa puede cambiar mi día.",
"Tu forma de quererme.",
"Porque contigo puedo ser yo mismo.",
"Porque me haces sentir especial.",
"Porque siempre me apoyas.",
"Porque me escuchas.",
"Porque tus abrazos me dan paz.",
"Porque me haces feliz.",
"Porque amo tu manera de ser.",
"Porque eres única.",

"Porque tus pequeños detalles significan mucho.",
"Porque confío en ti.",
"Porque eres una persona increíble.",
"Porque me inspiras.",
"Porque me haces querer mejorar.",
"Porque amo nuestras conversaciones.",
"Porque amo nuestras risas.",
"Porque me encanta pasar tiempo contigo.",
"Porque haces especiales los momentos simples.",
"Porque eres mi persona favorita.",

"Porque tienes un corazón hermoso.",
"Porque admiro tu fuerza.",
"Porque me gusta cuidarte.",
"Porque quiero verte feliz.",
"Porque amo tu sonrisa.",
"Porque amo tus ocurrencias.",
"Porque me encanta tu forma de pensar.",
"Porque eres importante para mí.",
"Porque me das tranquilidad.",
"Porque haces mi vida más bonita.",

"Porque contigo tengo recuerdos increíbles.",
"Porque me gusta imaginar un futuro contigo.",
"Porque amo cómo me haces sentir.",
"Porque eres una parte importante de mi vida.",
"Porque me gusta aprender contigo.",
"Porque celebras mis logros.",
"Porque me apoyas en mis sueños.",
"Porque me haces sentir acompañado.",
"Porque eres mi alegría.",
"Porque eres mi lugar seguro.",

"Porque amo tu forma de hablar.",
"Porque amo tu personalidad.",
"Porque me encanta verte sonreír.",
"Porque tus mensajes alegran mi día.",
"Porque me gusta hacerte feliz.",
"Porque quiero seguir creando recuerdos.",
"Porque contigo todo se siente especial.",
"Porque eres una persona maravillosa.",
"Porque tienes algo que nadie más tiene.",
"Porque simplemente eres Hanna ❤️"

];


// completar hasta 100 automáticamente

while(razones.length < 100){

razones.push(
"Porque cada día encuentro una nueva razón para amarte ❤️"
);

}




function mostrarRazones(){


document.querySelector(".carta").remove();


let html=`


<section class="razones">


<h1>
100 razones por las que amo a Hanna ❤️
</h1>


<div class="galeria">


<img src="foto1.jpg">
<img src="foto2.jpg">
<img src="foto3.jpg">
<img src="foto4.jpg">
<img src="foto5.jpg">
<img src="foto6.jpg">


</div>


`;


razones.forEach((razon,index)=>{


html+=`

<div class="tarjeta">

<h3>
Razón #${index+1} ❤️
</h3>


<p>
${razon}
</p>


</div>


`;

});


html+=`

</section>

`;


document.body.insertAdjacentHTML(
"beforeend",
html
);


}


// ============================
// ANIMACIONES
// ============================


const estilo=document.createElement("style");


estilo.innerHTML=`

@keyframes desaparecer{

from{

opacity:1;

}


to{

opacity:0;

transform:scale(.8);

}

}

`;


document.head.appendChild(estilo);