"use strict";
const loginEmail = document.querySelector("#login_email");
const loginPassword = document.querySelector("#login_password");
const loginBtn = document.querySelector("#login_submin_btn");
const loginContainer = document.querySelector("#login_container");
const registerContainer = document.querySelector("#register_container");
const homeContainer = document.querySelector("#home_container");
const menuContainer = document.querySelector("#menu_container");
const reviewContainer = document.querySelector("#review_container");
const profile = document.querySelector(".profile");
const contactPage = document.querySelector("#contact_page");
const openRegPage = document.querySelector("#sign_up_btn");
const registerBtn = document.querySelector("#register_btn");
const signUpName = document.querySelector("#sign_up_name");
const signUpEmail = document.querySelector("#sign_up_email");
const signUpPassword = document.querySelector("#sign_up_password");
const orderBtn = document.querySelectorAll("#order_btn");
const menuBtn = document.querySelector(".take_me_to_menu");
const commnetFoodName = document.querySelector("#commnet_food_name");
const commnetPersonName = document.querySelector("#commnet_person_name");
const commentEmail = document.querySelector("#comment_email");
const commentContent = document.querySelector("#comment_content");
const commentBtn = document.querySelectorAll("#comment");
const submitComment = document.querySelector("#submit_comment_btn");
const showProfile = document.querySelector(".show_profile");
const profileTable = document.querySelector(".profile_table");

registerContainer.style.display =
    homeContainer.style.display =
    menuContainer.style.display =
    reviewContainer.style.display =
    contactPage.style.display =
    profile.style.display =
        "none";

let users = ["maryam@gmail.com"];
let userProfiles = {
    "maryam@gmail.com": {
        userName: "Maryam AA",
        password: "11",
    },
};
let orders = { "maryam@gmail.com": [] };
let comment = {};
let currentUser;
const login = function (e) {
    if (!loginEmail.value) {
        alert(" Nothing Inputed");
        return;
    }
    const inputMail = loginEmail.value;
    if (users.includes(loginEmail.value)) {
        console.log(userProfiles[inputMail].password);
        if (loginPassword.value === userProfiles[inputMail].password) {
            displayME(homeContainer);
            currentUser = loginEmail.value;
        } else alert("Invalid Password");
    }
};

const displayME = function (me) {
    if (me === loginContainer) {
        registerContainer.style.display =
            homeContainer.style.display =
            menuContainer.style.display =
            reviewContainer.style.display =
            profile.style.display =
                "none";
        loginContainer.style.display = "block";
    } else if (me === homeContainer) {
        loginContainer.style.display =
            registerContainer.style.display =
            menuContainer.style.display =
            reviewContainer.style.display =
            profile.style.display =
                "none";
        homeContainer.style.display = "block";
    } else if (me === menuContainer) {
        loginContainer.style.display =
            homeContainer.style.display =
            registerContainer.style.display =
            reviewContainer.style.display =
            profile.style.display =
                "none";
        menuContainer.style.display = "block";
    } else if (me === registerContainer) {
        loginContainer.style.display =
            homeContainer.style.display =
            menuContainer.style.display =
            reviewContainer.style.display =
            profile.style.display =
                "none";
        registerContainer.style.display = "block";
    } else if (me === reviewContainer) {
        loginContainer.style.display =
            homeContainer.style.display =
            menuContainer.style.display =
            registerContainer.style.display =
            profile.style.display =
                "none";
        reviewContainer.style.display = "block";
    } else if (me === profile) {
        loginContainer.style.display =
            homeContainer.style.display =
            menuContainer.style.display =
            registerContainer.style.display =
            reviewContainer.style.display =
                "none";
        profile.style.display = "block";
    }
};
const registerNewPerson = function (inputFullName, inputEmail, inputPassword) {
    console.log(inputFullName, inputEmail, inputPassword);
    users.push(inputEmail);
    userProfiles[inputEmail] = { password: inputPassword };
    userProfiles[inputEmail].userName = inputFullName;
    console.log(users, userProfiles);
    orders[inputEmail] = [];
    displayME(loginContainer);
};
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    login();
});
menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    displayME(menuContainer);
});
openRegPage.addEventListener("click", function (e) {
    e.preventDefault();
    displayME(registerContainer);
});
registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!signUpEmail.value && !signUpName.value && !signUpPassword.value) {
        alert("Incomplete Field Detected ❌❌");
    } else registerNewPerson(signUpName.value, signUpEmail.value, signUpPassword.value);
});
orderBtn.forEach((e) => {
    e.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(orders[currentUser]);
        console.log(e.target.dataset);
        orders[currentUser].push(e.target.dataset.food);
        console.log(orders);
    });
});

commentBtn.forEach((e) => {
    e.addEventListener("click", function () {
        displayME(reviewContainer);
    });
});
submitComment.addEventListener("click", function (e) {
    e.preventDefault();
    comment[currentUser] = {
        foodName: commnetFoodName.value,
        name: commnetPersonName.value,
        email: commentEmail.value,
        details: commentContent.value,
    };
    console.log(comment);
});
showProfile.addEventListener("click", function (e) {
    e.preventDefault();
    displayME(profile);
    const html = `                <tr>
                    <td>
                        <h2>PROFILE</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="form_label" for="new_name">Name: </label>
                        <input
                            placeholder="${userProfiles[currentUser].userName}"
                            type="text"
                            name="new_name"
                            id="new_name"
                            class="form_input"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="form_label" for="comment_email"
                            >Email:
                        </label>
                        <input
                            placeholder="${currentUser}"
                            type="email"
                            name="email"
                            id="new_email"
                            class="form_input"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="form_label" for="new_number"
                            >Number:
                        </label>
                        <input
                            placeholder="Number"
                            type="number"
                            name="new_number"
                            id="new_number"
                            class="form_input"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="form_label" for="new_address"
                            >ADDRESS:
                        </label>
                        <input
                            placeholder="Address"
                            type="text"
                            name="new_address"
                            id="new_address"
                            class="form_input"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            id="Change_details"
                            type="submit"
                            value="Change Details"
                            class="btn_submit"
                        />
                    </td>
                </tr>`;
    profileTable.insertAdjacentHTML("afterbegin", html);
});
