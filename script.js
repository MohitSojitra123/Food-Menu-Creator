class food{
    all_food=[];

    add_food(f_name,f_price,f_url,f_dis,f_des,select_food){
        let obj={};

        this.f_name=f_name;
         this.f_price=f_price;
         this.f_url=f_url;
         this.f_dis=f_dis;
         this.f_des=f_des;
         this.select_food=select_food;

         obj.f_name=f_name;
         obj.f_price=f_price;
         obj.f_url=f_url;
         obj.f_dis=f_dis;
         obj.f_des=f_des;
         obj.select_food=select_food;

         this.all_food.push(obj);
    }

    show_data(){
        console.log(this.all_food);
    }
}


let food1=new food();


food1.add_food("Pasta",200,"./photo/e1.jpg",10,"Deliciously creamy cheese pasta, made with rich, melted cheese and perfectly cooked pasta. A comforting and satisfying meal for any occasion!","Vegetarian");

food1.add_food("Fresh Turkey & Egg Salad",400,"./photo/fresh-salad-with-turkey-eggs-vegetables.jpg",14,"A nutritious and delicious salad featuring grilled turkey slices, soft-boiled eggs, fresh greens, cherry tomatoes, and a light dressing. Perfect for a healthy meal!","Non Vegetarian");

food1.add_food("Spicy Tandoori Meatball Roll",300,"./photo/gt1.jpg",11," A delicious Indian-style roll with juicy tandoori-spiced meatballs, fresh coriander, pickled carrots, and a creamy chutney, all wrapped in a crispy paratha or bun. A perfect fusion of bold desi flavors!","Vegetarian");

food1.add_food("Amritsari Masala Tandoori",200,"https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",16,"A delicious Indian-style salmon fillet marinated in rich Punjabi spices, grilled to perfection, and served with fresh greens. A perfect blend of bold flavors and healthy indulgence!","Non Vegetarian");

food1.add_food("Masaledar Chicken Tikka",400,"./photo/th_5.jpg",10,"Crispy, bite-sized potato fritters infused with aromatic spices and coated in a golden gram flour batter. These Spicy Aloo Pop Bites are perfect for snacking, pairing with chutneys, or serving as a flavorful appetizer.","Non Vegetarian");

food1.add_food("Bombay Masala Sandwich",100,"./photo/sa_1.jpg",5,"A delicious multi-layered sandwich filled with fresh vegetables, creamy spreads, and flavorful spices, grilled to crispy perfection. This Grilled Veg Club Sandwich is a perfect choice for a wholesome and satisfying meal, served with a side of tangy dip.","Vegetarian");
// food1.show_data();



let food_name=document.getElementById("food_name");
let food_price=document.getElementById("food_price");
let food_url=document.getElementById("food_url");
let food_discount=document.getElementById("food_discount");
let food_description=document.getElementById("food_description");
let btn_1=document.getElementById("btn_1");
let select_food=document.getElementById("select_food");
let food_grid=document.getElementsByClassName("food-grid")[0];
let search_bar=document.getElementById("search_bar");
let food_card=document.querySelectorAll(".food-card");


btn_1.addEventListener("click",function(e){
    e.preventDefault();

    food1.add_food(food_name.value,food_price.value,food_url.value,food_discount.value,food_description.value,select_food.value);

    display_card();

})



function display_card(){
  
    food_grid.innerHTML="";

    for(let i=0; i<food1.all_food.length; i++){
        let div_1=document.createElement("div");
        div_1.setAttribute("class","food-card");
        div_1.innerHTML=
        `
          <img src="${food1.all_food[i].f_url}" alt="Healthy Food">
          <div class="card-content">
            <div class="card-header">
              <h3 class="title_h3">${food1.all_food[i].f_name}</h3>
              <span class="discount-badge">${food1.all_food[i].f_dis} OFF</span>
            </div>
            <p class="description">${food1.all_food[i].f_des}</p>
            <div class="card-footer">
              <span class="price">${food1.all_food[i].f_price}</span>
              <span class="veg">${food1.all_food[i].select_food}</span>
              <button class="order-btn">Order Now</button>
            </div>
          </div>
        `;

        food_grid.append(div_1);
    }

}



search_bar.addEventListener("input", function (e) {
    let searchValue = e.target.value.toLowerCase(); 

    display_card(); 

    let food_cards = document.querySelectorAll(".food-card"); 
    
    food1.all_food.forEach((foodItem, index) => {
        if (foodItem.f_name.toLowerCase().includes(searchValue)) {
            food_cards[index].style.display = "block";
        } else {
            food_cards[index].style.display = "none";
        }
    });
});

display_card();

let filter_select = document.querySelector(".filter-select");

filter_select.addEventListener("change", function (e) {
    let selectedValue = e.target.value;

    let food_cards = document.querySelectorAll(".food-card");

    food1.all_food.forEach((values, index) => {
        if (values.select_food === selectedValue) {
            food_cards[index].style.display = "block"; 
        } else {
            food_cards[index].style.display = "none"; 
        }
    });
});
       