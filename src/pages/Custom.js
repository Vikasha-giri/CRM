// //jQuery libraries
// import 'jquery/dist/jquery.min.js';

// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery';


// $('#campStaffListing').DataTable(
//     {
//         searching: false,
//         "bLengthChange": false,
//         paging: true,
//         "initComplete": function (settings, json) {
//             $(".dataTables_wrapper .row").addClass("table-wrapup gx-0 mb-2 mb-lg-3");
//         },
//         columnDefs: [
//             {
//                 sortable: false,
//                 "targets": 7,
//             }
//         ]
//     }
// );
if (document.querySelectorAll('.nav-item.w-100 a.nav-link').length > 0) {
    document.querySelectorAll('.nav-item.w-100 a.nav-link').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.nav-item.w-100 a.nav-link').forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        })
    })
}
