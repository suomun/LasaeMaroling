<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>내 뉴스 웹사이트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #333;
      color: white;
      padding: 15px;
      text-align: center;
    }

    nav {
      background-color: #444;
      color: white;
      padding: 10px;
      text-align: center;
      display: flex; /* 링크들을 가로로 배치 */
      justify-content: center; /* 가운데 정렬 */
      align-items: center; /* 수직 정렬 */
    }

    nav a {
      color: white;
      margin: 0 15px; /* 좌우 마진을 주어 간격을 설정 */
      text-decoration: none;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
    }

    .main {
      flex: 3;
      margin-right: 20px;
      padding: 20px;
    }

    .sidebar {
      flex: 1;
      padding: 20px;
    }

    .news {
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 10px;
    }

    .news img {
      width: 100%;
      height: auto;
    }

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      margin-top: 20px;
    }

    /* 팝업 관련 스타일 */
    #popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      overflow: hidden;
    }

    .popup-content {
      position: relative;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 80%;
      max-height: 80%;
      overflow-y: auto;
      text-align: center;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }

    .popup-content img {
      max-width: 100%;
      height: auto;
    }

    .close-btn {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        padding: 10px;
      }

      .main {
        margin-right: 0;
        padding: 10px;
      }

      .sidebar {
        flex: 1 1 100%;
        margin-top: 20px;
      }

      nav a {
        display: block;
        margin: 10px 0;
      }

      footer {
        padding: 10px;
      }

      #popup .popup-content {
        max-width: 95%;
        max-height: 90%;
      }
    }
  </style>
</head>
<body>

<!-- 팝업창 -->
<div id="popup">
  <div class="popup-content">
    <span class="close-btn" onclick="closePopup()">&times;</span>
    <img src="images/EX_picture1.png" alt="팝업 이미지">
    <p>수정그만할래 샹.</p>
    <!-- "일주일 동안 안 보이기" 체크박스 -->
    <label>
      <input type="checkbox" id="dontShowAgain"> 일주일 동안 안 보이기
    </label>
  </div>
</div>

<header>
  <h1>오늘의 뉴스</h1>
</header>

<nav>
  <a href="info.html">정보</a>
  <a href="physics.html">물리</a>
  <a href="bio.html">생명</a>
</nav>

<div class="container">
  <div class="main">
    <div class="news">
      <h2>헤드라인 뉴스</h2>
      <img src="https://via.placeholder.com/600x300" alt="헤드라인 이미지">
      <p>이곳은 헤드라인 뉴스의 내용입니다. 여기에 간단한 설명이 들어갑니다.</p>
    </div>

    <div class="news">
      <h2>오늘의 뉴스</h2>
      <p>이상원씨 오늘 프로젝트 봉봉 마음대로하겠다고 선언해, 팀원들 충격.</p>
    </div>
  </div>

  <div class="sidebar">
    <h3>인기 기사</h3>
    <ul>
      <li><a href="#">지금 가장 많이 본 뉴스</a></li>
      <li><a href="#">실시간 속보</a></li>
      <li><a href="#">기상 예보</a></li>
    </ul>
  </div>
</div>

<footer>
  <p>© 2025 내 뉴스 웹사이트. All rights reserved.</p>
</footer>

<!-- 팝업 제어 스크립트 -->
<script>
  window.onload = function() {
    // 로컬스토리지에서 'popupCloseDate' 값이 있으면, 일주일을 계산해 팝업 표시 여부 결정
    const closeDate = localStorage.getItem("popupCloseDate");
    const dontShowAgain = localStorage.getItem("dontShowAgain");

    // "일주일 동안 안 보이기" 체크박스 상태와 일주일 경과 여부 체크
    if (dontShowAgain === "true") {
      const currentDate = new Date().getTime();
      const differenceInDays = (currentDate - closeDate) / (1000 * 3600 * 24); // 밀리초를 일로 변환

      // 일주일(7일)이 지나지 않았다면 팝업을 숨긴다
      if (differenceInDays < 7) {
        document.getElementById("popup").style.display = "none";
      } else {
        // 일주일이 지난 경우 팝업을 다시 띄운다
        document.getElementById("popup").style.display = "flex";
      }
    } else {
      // 로컬스토리지에 값이 없으면 첫 방문이므로 팝업을 띄운다
      document.getElementById("popup").style.display = "flex";
    }
  }

  function closePopup() {
    const dontShowAgain = document.getElementById("dontShowAgain").checked;

    // 팝업을 닫고, 현재 날짜를 밀리초 단위로 로컬스토리지에 저장
    document.getElementById("popup").style.display = "none";
    
    if (dontShowAgain) {
      // "일주일 동안 안 보이기" 체크박스를 클릭한 경우
      const currentDate = new Date().getTime();
      localStorage.setItem("popupCloseDate", currentDate); // 닫은 날짜를 저장
      localStorage.setItem("dontShowAgain", "true"); // "일주일 동안 안 보이기" 체크값 저장
    } else {
      // 체크박스를 클릭하지 않으면 로컬스토리지에 저장하지 않음
      localStorage.removeItem("popupCloseDate");
      localStorage.removeItem("dontShowAgain");
    }
  }
</script>

</body>
</html>
