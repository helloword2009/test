// คะแนนแต่ละคณะสี
const scores = {
  "โอภาสรวี": {
    "ความสะอาดพื้นห้อง": 10,
    "ความสะอาดของกระดาน": 15,
    "ความสะอาดของทั้งขยะ": 12,
    "ไฟและพัดลม": 8,
    "การจัดเก็บอุปกรณ์": 20
  },
  "รัศมีดารา": {
    "ความสะอาดพื้นห้อง": 12,
    "ความสะอาดของกระดาน": 14,
    "ความสะอาดของทั้งขยะ": 9,
    "ไฟและพัดลม": 13,
    "การจัดเก็บอุปกรณ์": 17
  },
  "มาลัยพิรุณ": {
    "ความสะอาดพื้นห้อง": 8,
    "ความสะอาดของกระดาน": 10,
    "ความสะอาดของทั้งขยะ": 15,
    "ไฟและพัดลม": 11,
    "การจัดเก็บอุปกรณ์": 19
  },
  "ไพรจิตเวหาส": {
    "ความสะอาดพื้นห้อง": 13,
    "ความสะอาดของกระดาน": 16,
    "ความสะอาดของทั้งขยะ": 7,
    "ไฟและพัดลม": 12,
    "การจัดเก็บอุปกรณ์": 18
  },
  "จันทราอำไพร": {
    "ความสะอาดพื้นห้อง": 9,
    "ความสะอาดของกระดาน": 11,
    "ความสะอาดของทั้งขยะ": 14,
    "ไฟและพัดลม": 10,
    "การจัดเก็บอุปกรณ์": 16
  }
};

// ดึงชื่อคณะที่เลือก
function getSelectedFaculty() {
  const sel = document.getElementById("faculty");
  if (sel) return sel.value;
  return localStorage.getItem("faculty") || "โอภาสรวี";
}

// แสดงคะแนนของคณะที่เลือก
function renderScores() {
  const faculty = getSelectedFaculty();
  const div = document.getElementById("scoreboard");
  if (!div || !scores[faculty]) {
    if (div) div.innerHTML = "<div>ไม่พบข้อมูลคณะนี้</div>";
    return;
  }
  div.innerHTML = `<h3>คะแนนของคณะ ${faculty}</h3>`;
  for (const color in scores[faculty]) {
    div.innerHTML += `<div>${color}: ${scores[faculty][color]} คะแนน</div>`;
  }
}

// แสดงช่องกรอกคะแนนและปุ่มบันทึก
function renderEditorControls() {
  const faculty = getSelectedFaculty();
  const controls = document.getElementById("controls");
  if (!controls || !scores[faculty]) return;

  controls.innerHTML = `<h3>แก้ไขคะแนน</h3>`;

  for (const color in scores[faculty]) {
    controls.innerHTML += `
      <div style="margin-bottom: 10px;">
        <label><b>${color}</b></label><br>
        <input type="number" id="input-${color}" value="${scores[faculty][color]}" style="width: 60px;">
      </div>
    `;
  }

  controls.innerHTML += `<button onclick="saveScores()">บันทึกคะแนน</button>`;
}

// บันทึกคะแนนที่กรอกใหม่
function saveScores() {
  const faculty = getSelectedFaculty();
  if (!scores[faculty]) return;

  for (const color in scores[faculty]) {
    const input = document.getElementById(`input-${color}`);
    const newScore = parseInt(input.value);
    if (!isNaN(newScore)) {
      scores[faculty][color] = newScore;
    }
  }

  renderScores();
}

// ฟังก์ชันเปลี่ยนไปหน้าสุดท้าย
function ไปหน้าสุดท้าย() {
  document.getElementById("หน้าแรก").style.display = "none";
  document.getElementById("หน้าสุดท้าย").style.display = "block";
  renderScores();
  renderEditorControls();
}