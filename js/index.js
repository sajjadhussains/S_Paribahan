let allSeats = document.querySelectorAll('.grid-item');
let tableBody = document.getElementById('table-body');
let totalPrice = document.getElementById('total-price');
let phoneNumber = document.getElementById('phone-number');
const nextBtn = document.getElementById('next-btn');
const seatsRem = document.getElementById('seats-rem');
const coupon = document.getElementById('coupon');
const grandTotal=document.getElementById('grand-total');
const applyBtn=document.getElementById('apply-btn');
const couponInput=document.getElementById('coupon-input');
const totalAndDiscount=document.getElementById('total-and-discount');
const confirmSeatCount=document.getElementById('confirm-seat-count');

let i=0;
let seats=40;

allSeats.forEach(function(seat) {
    var clicked = false;
    
    seat.addEventListener('click', function() {
        var innerText = this.innerText;
        if (!clicked && (innerText != 'A' && innerText != 'B' && innerText != 'C' && innerText != 'D' && innerText != 'E' && innerText != 'F' && innerText != 'G' && innerText != 'H' && innerText != 'I' && innerText != 'J') && i<4) {
            clicked = true; 
            seat.classList.remove("bg-[#F7F8F8]");
            seat.classList.add("bg-[#1DD100]");
            makeTableRow(innerText);
            let price=(i+1)*550;
            seats--;
            totalPrice.innerText=price;
            grandTotal.innerText=price;
            seatsRem.innerText=seats;
            confirmSeatCount.innerText=i+1;
            if(i>=3){
                coupon.classList.remove("hidden");
                coupon.classList.add("block")
            }
            i=i+1;
        }
    });
});
document.addEventListener('DOMContentLoaded',function(){
    function checkButtonStatus() {
        if (phoneNumber.value && i>0) {
            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    }

    phoneNumber.addEventListener('input', checkButtonStatus);
    checkButtonStatus();
})
applyBtn.addEventListener('click',function(){
    let total=(i*550);
    if(couponInput.value==='NEW15'){
       applyCoupon(total,0.15);
    }
    else if(couponInput.value==='Couple20'){
        applyCoupon(total,0.2);
    }
    else{
        alert('Coupon Code is Not Valid');
    }
})
function makeTableRow(seatNum){
    let col=3;
    let row=document.createElement("tr");
    for(let i=0;i<col;i++){
        let tData=document.createElement("td");
        if(i==0){
            tData.innerText=seatNum;
        }
        else if(i==1){
            tData.innerText="Economy";
        }
        else{
            tData.innerText="550";
        }
        row.appendChild(tData);
    }
    tableBody.appendChild(row);
}
function applyCoupon(total,dis){
    let discount = total*dis;
    let totalGrand=total-discount;
    grandTotal.innerText=totalGrand;
    let div = document.createElement("div");
    let first_h3=document.createElement("h3");
    let second_h3=document.createElement("h3");
    div.classList.add("flex", "justify-between", "lg:w-[365px]", "ps-3", "pe-4", "price-border-bottom", "ms-1", "mb-4");
    second_h3.classList.add("me-6");
    first_h3.innerText="Discount";
    second_h3.innerText=discount;
    div.appendChild(first_h3);
    div.appendChild(second_h3);
    totalAndDiscount.appendChild(div);
    coupon.classList.add("hidden");
}
