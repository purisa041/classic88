// ข้อมูลอะไหล่ครบ 50 รายการ
const products = [
    // NISSAN (10 รายการ)
    { id: 1, category: 'skyline', tag: 'นิยมสูง', model: 'NISSAN SKYLINE GT-R (RB26DETT)', name: 'ชุดเทอร์โบคู่ HKS GTIII-SS', code: '11004-AN015', price: 132946 },
    { id: 2, category: 'skyline', tag: 'สินค้าแนะนำ', model: 'NISSAN SKYLINE GT-R R34', name: 'ชุดกรองเปลือย HKS Racing Suction', code: '70020-AN103', price: 28500 },
    { id: 3, category: 'skyline', tag: 'มีของพร้อมส่ง', model: 'NISSAN SKYLINE GT-R R32/R33/R34', name: 'ชุดคลัตช์คู่ NISMO Coppermix Twin', code: '3000S-RSR35-E', price: 68000 },
    { id: 4, category: 'skyline', tag: 'สายสนาม', model: 'NISSAN SILVIA S15 (SR20DET)', name: 'ชุดโบว์ Garrett GTX2860R Gen II', code: '849840-5001S', price: 54000 },
    { id: 5, category: 'skyline', tag: 'ระดับตำนาน', model: 'NISSAN SILVIA S14/S15', name: 'อินเตอร์คูลเลอร์ BLITZ SE', code: '23103', price: 19500 },
    { id: 6, category: 'skyline', tag: 'มีของพร้อมส่ง', model: 'NISSAN 350Z / 370Z (VQ35/VQ37)', name: 'ท่อไอเสียไทเทเนียม Tomei Expreme Ti', code: '440014', price: 49000 },
    { id: 7, category: 'skyline', tag: 'ของแท้', model: 'NISSAN SKYLINE R33/R34', name: 'ปั๊มน้ำมันเครื่อง NISMO N1', code: '15010-RR580', price: 18500 },
    { id: 8, category: 'skyline', tag: 'สายซิ่ง', model: 'NISSAN SILVIA S13/S14/S15', name: 'ชุดโช๊คอัพ D1 Spec HKS Hipermax IV', code: '80230-AN002', price: 46000 },
    { id: 9, category: 'skyline', tag: 'แนะนำ', model: 'NISSAN SKYLINE GT-R (RB26)', name: 'คอยล์จุดระเบิด Splitfire Direct Ignition', code: 'DIS-001', price: 16500 },
    { id: 10, category: 'skyline', tag: 'ยอดนิยม', model: 'NISSAN SILVIA S15', name: 'ไฟท้าย LED D-Max Smoke Lens', code: 'DML1S15001', price: 12500 },

    // TOYOTA (10 รายการ)
    { id: 11, category: 'supra', tag: 'ขายดี', model: 'TOYOTA SUPRA JZA80 (2JZ-GTE)', name: 'กรองอากาศ HKS Super Power Flow', code: '70019-AT105', price: 8500 },
    { id: 12, category: 'supra', tag: 'สายแรง', model: 'TOYOTA SUPRA JZA80 (2JZ-GTE)', name: 'กล่อง ECU กลาง HKS F-CON V Pro V4.0', code: '42012-AK001', price: 74000 },
    { id: 13, category: 'supra', tag: 'มีของพร้อมส่ง', model: 'TOYOTA SUPRA JZA80', name: 'ชุดอินเตอร์คูลเลอร์ GReddy Spec LS', code: '12010461', price: 24900 },
    { id: 14, category: 'supra', tag: 'ระดับตำนาน', model: 'TOYOTA AE86 TRUENO (4AGE)', name: 'เฮดเดอร์สแตนเลส Fujitsubo Super EX', code: '620-22455', price: 32000 },
    { id: 15, category: 'supra', tag: 'สายดริฟต์', model: 'TOYOTA CHASER JZX100 (1JZ-GTE)', name: 'เฟืองท้ายแต่ง Cusco Type RS 2WAY LSD', code: 'LSD 159 F2', price: 38500 },
    { id: 16, category: 'supra', tag: 'ของแท้', model: 'TOYOTA SUPRA JZA80', name: 'ชุดเบรก Brembo GT 6-Piston 355mm', code: '1B1.8003A', price: 128000 },
    { id: 17, category: 'supra', tag: 'แนะนำ', model: 'TOYOTA GR SUPRA A90 (B58)', name: 'ชุดท่อไอเสีย Akrapovic Slip-On Titanium', code: 'S-TY/TI/1H', price: 98000 },
    { id: 18, category: 'supra', tag: 'ขายดี', model: 'TOYOTA 86 / SUBARU BRZ (FA20)', name: 'ชุดซูเปอร์ชาร์จเจอร์ HKS GT2', code: '12001-AT012', price: 145000 },
    { id: 19, category: 'supra', tag: 'สายสนาม', model: 'TOYOTA AE86 (4AGE 16V/20V)', name: 'ชุดปากแตร 4 ลิ้น Toda Racing Toda ITB', code: '17110-4AG-000', price: 42000 },
    { id: 20, category: 'supra', tag: 'มีของพร้อมส่ง', model: 'TOYOTA SUPRA JZA80', name: 'หม้อน้ำอลูมิเนียม Koyorad Hyper V-Core', code: 'VH010697', price: 15500 },

    // HONDA (10 รายการ)
    { id: 21, category: 'honda', tag: 'ขายดี', model: 'HONDA CIVIC EK9 / INTEGRA DC2 (B16/B18)', name: 'แคมชาร์ฟแต่ง Toda Racing Spec C', code: '14111-B16-00C', price: 31000 },
    { id: 22, category: 'honda', tag: 'นิยมสูง', model: 'HONDA CIVIC FD2 TYPE R (K20A)', name: 'ชุดกรองอากาศคาร์บอน Mugen Hi-Performance', code: '17200-XRR-K0S0', price: 29500 },
    { id: 23, category: 'honda', tag: 'สายซิ่ง', model: 'HONDA CIVIC FK8 / FL5 TYPE R (K20C1)', name: 'ท่อไอเสีย Spoon N1 Muffler Kit', code: '18030-FK8-000', price: 44000 },
    { id: 24, category: 'honda', tag: 'ระดับตำนาน', model: 'HONDA S2000 AP1/AP2 (F20C/F22C)', name: 'ชุดโช๊คอัพ Spoon Fixed Damper Kit', code: '51600-AP1-000', price: 48000 },
    { id: 25, category: 'honda', tag: 'ของแท้', model: 'HONDA CIVIC EG6 / EK9', name: 'ปีกนกหลังคาร์บอน Skunk2 Ultra Series', code: '516-05-0150', price: 11500 },
    { id: 26, category: 'honda', tag: 'มีของพร้อมส่ง', model: 'HONDA INTEGRA DC5 / CIVIC EP3', name: 'ชุดคลัตช์และฟลายวีล EXEDY Hyper Single', code: 'HH03SD', price: 26500 },
    { id: 27, category: 'honda', tag: 'สายแข่ง', model: 'HONDA S2000 AP1/AP2', name: 'ฝากระโปรงคาร์บอนเคฟล่า J\'s Racing Type S', code: 'CCB-S1-C', price: 43000 },
    { id: 28, category: 'honda', tag: 'แนะนำ', model: 'HONDA CIVIC All Model (K-Series)', name: 'ท่อร่วมไอดี Skunk2 Pro Series Intake Manifold', code: '307-05-0250', price: 16800 },
    { id: 29, category: 'honda', tag: 'ขายดี', model: 'HONDA CIVIC EG/EK/FD/FC', name: 'คันเกียร์สั้นแต่ง Hybrid Racing Short Shifter', code: 'HYB-SS-01-08', price: 14500 },
    { id: 30, category: 'honda', tag: 'มีของพร้อมส่ง', model: 'HONDA S2000 / CIVIC TYPE R', name: 'ฝาน้ำมันเครื่องอลูมิเนียม Spoon Yellow', code: '15610-EGG-000', price: 3200 },

    // SUBARU (10 รายการ)
    { id: 31, category: 'impreza', tag: 'นิยมสูง', model: 'SUBARU IMPREZA WRX / STI (EJ20/EJ25)', name: 'ท่อไอเสียไทเทเนียม Tomei Expreme Ti', code: 'TB6090-SB06B', price: 62951 },
    { id: 32, category: 'impreza', tag: 'สายสนาม', model: 'SUBARU WRX STI (VAB/GRB)', name: 'โช๊คอัพสตรีท HKS Hipermax S', code: '80300-AF001', price: 56000 },
    { id: 33, category: 'impreza', tag: 'มีของพร้อมส่ง', model: 'SUBARU IMPREZA GDB / GRB / VAB', name: 'ชุดเทอร์โบเดี่ยว HKS GTIII-RS Turbo Kit', code: '11004-AF014', price: 89000 },
    { id: 34, category: 'impreza', tag: 'ของแท้', model: 'SUBARU WRX STI (EJ25)', name: 'เวสเกตแต่ง Grimmspeed EWG Up-Pipe', code: '059001', price: 13500 },
    { id: 35, category: 'impreza', tag: 'แนะนำ', model: 'SUBARU IMPREZA WRX STI', name: 'โบล์วออฟวาล์ว HKS Super SQV IV Kit', code: '71008-AF013', price: 11500 },
    { id: 36, category: 'impreza', tag: 'สายแรง', model: 'SUBARU IMPREZA STI (EJ20/EJ25)', name: 'ชุดออยคูลเลอร์ Perrin Performance Oil Cooler', code: 'PSP-ENG-510', price: 27500 },
    { id: 37, category: 'impreza', tag: 'มีของพร้อมส่ง', model: 'SUBARU WRX STI VAB', name: 'ค้ำโช๊คหน้า STI Flexible Tower Bar', code: 'ST20502VV010', price: 12800 },
    { id: 38, category: 'impreza', tag: 'ขายดี', model: 'SUBARU IMPREZA GDB / GDA', name: 'ชุดไฟหน้าปรับระดับ Morette Twin Headlights', code: 'HL-GDB-02', price: 21000 },
    { id: 39, category: 'impreza', tag: 'สายแข่ง', model: 'SUBARU WRX STI (EJ257)', name: 'ชุดลูกสูบฟอร์จ Toda Racing Forged Piston', code: '13010-EJ2-500', price: 34000 },
    { id: 40, category: 'impreza', tag: 'นิยมสูง', model: 'SUBARU IMPREZA STI (All EJ Series)', name: 'กรองน้ำมันเครื่อง STI Performance Filter', code: 'ST152084S000', price: 1200 },

    // MAZDA (5 รายการ)
    { id: 41, category: 'rx7', tag: 'มีของพร้อมส่ง', model: 'MAZDA RX-7 (FD3S ROTARY 13B)', name: 'ชุดโช๊คอัพปรับระดับ Cusco Street ZERO A', code: '422 61N CN', price: 45000 },
    { id: 42, category: 'rx7', tag: 'สายแข่ง', model: 'MAZDA RX-7 (FD3S)', name: 'ชุดออยคูลเลอร์น้ำมันเครื่อง RE-Amemiya Twin', code: 'E0-022033-086', price: 39500 },
    { id: 43, category: 'rx7', tag: 'ระดับตำนาน', model: 'MAZDA RX-7 (FD3S 13B-REW)', name: 'ชุดท่อไอเสีย RE-Amemiya TA Dolphin Tail', code: 'M0-022036-020', price: 34000 },
    { id: 44, category: 'rx7', tag: 'นิยมสูง', model: 'MAZDA RX-8 (SE3P 13B-MSP)', name: 'ชุดคอยล์จุดระเบิดแต่ง Bennett Auto Ignition', code: 'IGN-RX8-04', price: 18500 },
    { id: 45, category: 'rx7', tag: 'มีของพร้อมส่ง', model: 'MAZDA ROADSTER MX-5 (NA/NB)', name: 'ชุดโช๊คสตรีท Tein Flex Z Coilover', code: 'VSM40-C1SS1', price: 29800 },

    // UNIVERSAL (5 รายการ)
    { id: 46, category: 'universal', tag: 'ระดับตำนาน', model: 'UNIVERSAL (PCD 5x114.3)', name: 'ล้อแม็ก VOLK RACING TE37 OG ขอบ 18"', code: 'BR-1895-5114', price: 118000 },
    { id: 47, category: 'universal', tag: 'สายสนาม', model: 'UNIVERSAL (เบาะบัคเก็ตซีท FIA)', name: 'เบาะซิ่ง BRIDE ZETA IV (Gradation Logo)', code: 'HA1GSC', price: 50979 },
    { id: 48, category: 'universal', tag: 'ขายดี', model: 'UNIVERSAL (หน้าปัดวัดรอบ)', name: 'เกจวัดความเร็ว/วัดรอบ Defi ADVANCE BF Set', code: 'DF10001', price: 28000 },
    { id: 49, category: 'universal', tag: 'สายซิ่ง', model: 'UNIVERSAL (พวงมาลัยแต่ง)', name: 'พวงมาลัย NARDI Classic Leather Black Spoke 330mm', code: '6061.33.2092', price: 12500 },
    { id: 50, category: 'universal', tag: 'นิยมสูง', model: 'UNIVERSAL (เข็มขัดนิรภัยสนาม)', name: 'เข็มขัดนิรภัย 4 จุด TAKATA Race 4 Snap', code: '70001-0', price: 14500 }
];

let cart = [];

// ฟังก์ชันโหลดอะไหล่ลงหน้าเว็บอัตโนมัติ
function renderProducts(items) {
    const container = document.getElementById('product-container');
    container.innerHTML = items.map(product => `
        <div class="card" data-category="${product.category}">
            <div class="card-tag">${product.tag}</div>
            <div class="card-details">
                <span class="car-model">${product.model}</span>
                <h3>${product.name}</h3>
                <p class="part-code">รหัสสินค้า: ${product.code}</p>
                <div class="card-footer">
                    <span class="price">฿ ${product.price.toLocaleString()}</span>
                    <button class="btn-buy" onclick="addToCart('${product.name}', ${product.price})">ใส่ตะกร้า</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ฟังก์ชันกดแยกตามรุ่นรถ (กดได้จริง)
function filterModel(category) {
    const buttons = document.querySelectorAll('.btn-model');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// ระบบจัดการตะกร้าสินค้า
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
    alert(`เพิ่ม "${name}" ลงในตะกร้าเรียบร้อยแล้ว!`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQty;

    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `฿ ${totalSum.toLocaleString()}`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">ไม่มีสินค้าในตะกร้า</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <div class="item-price">฿ ${item.price.toLocaleString()} x ${item.quantity} ชิ้น</div>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})">ลบออก</button>
            </div>
        `).join('');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// หน้าต่างตะกร้าสินค้า (Modal)
const modal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeBtn = document.getElementById('close-modal');

cartBtn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function processOrder(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert('กรุณาเลือกสินค้าใส่ตะกร้าก่อนทำการสั่งซื้อ!');
        return;
    }

    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    alert(`🏎️ ขอบคุณสำหรับการสั่งซื้อ คุณ ${name}!\n\nระบบได้รับรายการสั่งซื้อเรียบร้อยแล้ว\nเราจะทำการจัดส่งไปที่:\n${address}\nเบอร์โทรศัพท์: ${phone}\n\nสถานะปัจจุบัน: กำลังเตรียมจัดส่งสินค้าด่วนพิเศษ (READY TO SHIP)`);

    cart = [];
    document.getElementById('checkout-form').reset();
    updateCartUI();
    modal.style.display = "none";
}

// เริ่มต้นแสดงผล 50 รายการทันทีที่เปิดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});