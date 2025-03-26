// Your code here.
 document.addEventListener("DOMContentLoaded", function () {
            const container = document.getElementById("items");
            let selectedItem = null;
            let offsetX, offsetY;

            document.querySelectorAll(".item").forEach(item => {
                item.addEventListener("mousedown", function (e) {
                    selectedItem = this;
                    offsetX = e.clientX - selectedItem.offsetLeft;
                    offsetY = e.clientY - selectedItem.offsetTop;
                    selectedItem.style.cursor = "grabbing";
                });
            });

            document.addEventListener("mousemove", function (e) {
                if (selectedItem) {
                    let newX = e.clientX - offsetX;
                    let newY = e.clientY - offsetY;
                    
                    let maxX = container.offsetWidth - selectedItem.offsetWidth;
                    let maxY = container.offsetHeight - selectedItem.offsetHeight;
                    
                    if (newX < 0) newX = 0;
                    if (newY < 0) newY = 0;
                    if (newX > maxX) newX = maxX;
                    if (newY > maxY) newY = maxY;
                    
                    selectedItem.style.left = newX + "px";
                    selectedItem.style.top = newY + "px";
                }
            });

            document.addEventListener("mouseup", function () {
                if (selectedItem) {
                    selectedItem.style.cursor = "grab";
                    selectedItem = null;
                }
            });
        });