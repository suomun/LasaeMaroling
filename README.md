<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>프로젝트 페이지</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: white;
    }

    /* 상단 헤더 */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      border-bottom: 1px solid #ddd;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #222;
    }

    /* 햄버거 아이콘 */
    .menu-icon {
      width: 30px;
      height: 25px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .menu-icon span {
      display: block;
      height: 4px;
      background-color: #333;
      border-radius: 2px;
    }

    /* 사이드 메뉴 */
    .side-menu {
      position: fixed;
      top: 0;
      right: -250px; /* 처음엔 숨김 */
      width: 250px;
      height: 100%;
      background-color: #f0f0f0;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
      padding: 40px 20px;
      transition: right 0.3s ease;
      z-index: 100;
    }

    .side-menu.active {
      right: 0;
    }

    .side-menu h2 {
      margin-top: 0;
    }

    .side-menu ul {
      list-style: none;
      padding: 0;
    }

    .side-menu li {
      margin: 15px 0;
      font-size: 1.1rem;
    }

    /* 과목 링크 스타일 (검은색 박스 추가, 좌우 끝에 붙도록 설정) */
    .subject-nav {
      display: flex;
      justify-content: space-around;  /* 링크들을 좌우에 고르게 배치 */
      background-color: #333; /* 검은색 배경 */
      padding: 10px 0;
      width: 100%;  /* 전체 너비로 확장 */
    }

    .subject-nav a {
      text-decoration: none;
      font-size: 1.2rem;
      color: white; /* 흰색 텍스트 */
      font-weight: bold;
      transition: color 0.2s ease;
    }

    .subject-nav a:hover {
      color: #f0f0f0; /* 호버 시 색 변경 */
    }
  </style>
</head>
<body>

  <!-- 헤더 -->
  <header>
    <h1>프로젝트 이름</h1>
    <div class="menu-icon" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <!-- 과목 링크 (정보, 물리, 생명) -->
  <nav class="subject-nav">
    <a href="info.html">정보</a>
    <a href="physics.html">물리</a>
    <a href="bio.html">생명</a>
  </nav>

  <!-- 사이드 메뉴 -->
  <div class="side-menu" id="sideMenu">
    <h2>메뉴</h2>
    <ul>
      <li><a href="#">소개</a></li>
      <li><a href="#">뉴스</a></li>
      <li><a href="#">문의</a></li>
    </ul>
  </div>

  <script>
    function toggleMenu() {
      const menu = document.getElementById('sideMenu');
      menu.classList.toggle('active');
    }
  </script>

</body>
</html>
