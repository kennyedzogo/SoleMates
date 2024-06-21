const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
  {
    id:1,
    title :"Air Force",
    price: 119,
    colors:[
    {
      code:"black",
      img: "Force1.avif",
    },
    {
      code: "white",
      img: "whiteForce.png",
    },
    ],
  },
  {
    id:2,
    title: "Jordan 1",
    price: 130,
    colors:[
      {
        code:" Red",
        img: "rednBlack.png",
      },
      {
        code:"blue",
        img: "splitRed.jpeg",
      },
      {
        code: "Gray ",
        img: "blackCement.jpeg",
      },
      {
        code: "White",
        img :"whiteJ1.png",
      }
    ]
  },
  {
    id:3,
    title: "Adidas Forums",
    price: 90,
    colors:[

      {
        code: "Gray",
        img :"forumGrey.jpeg",
      },
      {
        code: "White",
        img: "forumWhite.jpeg",
      },
      {
        code: "Blue",
        img: "forumWhiteBlueF.jpeg",
      }
    ]
  },
  {
    id:4,
    title: "New Balance 550",
    price: 117,
    colors:[
      {
        code:"Green ",
        img: "NB550.png"
      },
      {
        code:"Gray",
        img: "NB550G.png"
      },
      {
        code:"White",
        img: "NB550W.png"
      }
    ]

  }
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
  item.addEventListener("click", ()=>{
    //change  the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    chosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = chosenProduct.price;
    currentProductImg.src= chosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) =>{
      color.style.backgroundColor = chosenProduct.colors[index].code;
    })
  });
});


currentProductColors.forEach((color, index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = chosenProduct.colors[index].img;
  })
})

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor= "white";
      size.style.color="black";

    })
    size.style.backgroundColor= "black";
    size.style.color="white";
  })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})