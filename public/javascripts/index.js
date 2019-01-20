function surfPages() {
    $('#surfBar li a').click(function (e) {
        var page = e.target.getAttribute('data-page');

        $('.container').hide();
        $(`#${page}-page`).fadeIn();
    });
};
surfPages();
$(`#third-page`).show();

/* load data from json to html table */

function firstTable() {
    $.ajax('data/new_data.json').done(function (students) {
        var list = $('table tbody');
        var result = students.map(function (student) {
            return `<tr>
            <td>${student.fName} ${student.lName}</td>
            <td>${student.grade}</td>
            </tr>`;
        });

        list.html(result);
        /* zebra style table */
        $("#table-first tr:odd").addClass("oddZebra");
        $("#table-first tr:even").addClass("evenZebra");
    });
};
firstTable();

/* new contact modal */


document.getElementById("newContactBtn").onclick = displayModal;

function displayModal() {
    console.log('click pe mondal')
    document.getElementById("modal1").style.display = "flex"
}
document.querySelector('.close').onclick = closeModal;
function closeModal() {
    document.getElementById("modal1").style.display = "none";
}