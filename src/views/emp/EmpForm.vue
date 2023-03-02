<!-- 템플릿 시작 -->
<template>
    <div class="emp_container">
        <div class="emp_header">사원관리</div>
        <div class="emp_body">
            <!-- 검색 및 CRUD 버튼 시작 -->
            <div class="menu">
                <div class="menu_left">
                    <div>사용자</div>
                    <div>사용자input</div>
                    <button @click="isModalOpened = true">검색</button>
                </div>
                <div class="menu_right">
                    <button>추가</button>
                    <button>저장</button>
                    <button>삭제</button>
                    <button>초기화</button>
                </div>
            </div>
            <!-- 검색 및 CRUD 버튼 끝 -->
            <!-- 사원 검색 모달창 시작-->
            <div class="black_bg" v-if="isModalOpened == true">
                <div class="white_bg">
                    <div>사원 검색</div>
                    <div class="emp_modal_menu">
                        <div>검색콤보</div>
                        <div>
                            <button>검색</button>
                            <button>초기화</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>사번</th>
                                <th>이름</th>
                                <th>직급</th>
                                <th>부서</th>
                                <th>전화번호</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>아</td>
                                <td>무</td>
                                <td>거</td>
                                <td>나</td>
                                <td>뿅</td>
                            </tr>
                        </tbody>
                    </table>
                    <button @click="isModalOpened = false">닫기</button>
                </div>
            </div>
            <!-- 사원 검색 모달창 끝-->
            <!-- 데이터 입력 테이블 시작 -->
            <table>
                <tr>
                    <td rowspan="9">
                        <div class="emp_photo">클릭하여 사진 추가</div>
                    </td>
                    <td class="col_name">사원번호</td>
                    <td class="col_data"></td>
                    <td class="col_name">사원ID</td>
                    <td class="col_data"></td>
                    <td class="col_name">사원PW</td>
                    <td class="col_data"></td>
                </tr>
                <tr>
                    <td class="col_name">성명</td>
                    <td class="col_data"></td>
                    <td class="col_name">영문성명</td>
                    <td class="col_data"></td>
                    <td class="col_name">주민등록번호</td>
                    <td class="col_data"></td>
                </tr>
                <tr>
                    <td class="col_name">주소</td>
                    <td colspan="3"></td>
                    <td class="col_name">상세주소</td>
                    <td class="col_data"></td>
                </tr>
                <tr>
                    <td class="col_name">이메일</td>
                    <td class="col_data"></td>
                    <td>@</td>
                    <td colspan="2"></td>
                    <td class="col_data">이메일콤보</td>
                </tr>
                <tr>
                    <td class="col_name">전화번호</td>
                    <td class="col_data"></td>
                    <td class="col_name">휴대폰번호</td>
                    <td class="col_data"></td>
                    <td class="col_name">성별</td>
                    <td class="col_data">성별콤보</td>
                </tr>
                <tr>
                    <td class="col_name">입사구분코드</td>
                    <td class="col_data">입사구분코드콤보</td>
                    <td class="col_name">입사일자</td>
                    <td class="col_data">입사일자달력</td>
                    <td class="col_name">부서코드</td>
                    <td class="col_data">부서코드콤보</td>
                </tr>
                <tr>
                    <td class="col_name">직위구분코드</td>
                    <td class="col_data">직위구분코드콤보</td>
                    <td class="col_name">퇴사일자</td>
                    <td class="col_data">퇴사일자달력</td>
                    <td class="col_name">연봉</td>
                    <td class="col_data"></td>
                </tr>
                <tr>
                    <td class="col_name">병역여부</td>
                    <td class="col_data">병역여부콤보</td>
                </tr>
                <tr>
                    <td class="col_name">비고</td>
                    <td colspan="6"></td>
                </tr>
            </table>
            <!-- 데이터 입력 테이블 끝 -->
        </div>
    </div>
</template>
<!-- 템플릿 끝 -->
<!-- 스크립트 시작 -->
<script>
export default {

    data() {
        return {
            isModalOpened: false,
        }
    }
}
</script>
<!-- 스크립트 끝 -->
<!-- CSS 시작 -->
<style scoped>
* {
    border: 1px solid rgb(185, 185, 185);
}

table {
    width: 1160px;
    height: 500px;
}

.emp_container {
    margin: 0
}

div {
    box-sizing: border-box;
}

.black_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}

.white_bg {
    widows: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}

.emp_modal_menu {
    display: flex;
    justify-content: space-between;
}

.emp_body {
    width: 1160px;
}

.menu {
    display: flex;
    justify-content: space-between;
}

.menu_left {
    display: flex;
}

.menu_right {
    display: flex;
}

.emp_photo {
    width: 170px;
    height: 200px;
}

.col_name {
    width: 150px;
    background-color: aqua;
}

.col_data {
    width: 180px;
    background-color: salmon;
}
</style>>
<!-- CSS 끝 -->

