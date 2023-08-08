document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const employeeRows = document.querySelectorAll('.employee-row');

    document.addEventListener('change', function () {
        const selectedOffice = officeFilter.value;

        employeeRows.forEach(function (row) {
            const employeeStatusCell = document.querySelector('.employee-status');
            const employeeOfficeCell = row.querySelector('.employee-office');
            const employeeOffice = employeeOfficeCell.textContent.trim();
            const employeePositionCell = row.querySelector('.employee-position');
            const employeePosition = employeePositionCell.textContent.trim();

            const officeFilterMatch = selectedOffice === 'All' || employeeOffice === selectedOffice;
            const positionFilterMatch = positionFilter.value === '' || employeePosition.startsWith(positionFilter.value);

            if (officeFilterMatch && positionFilterMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });

    officeFilter.dispatchEvent(new Event('change')); // Trigger office filter change to update combined filtering
    
    function applySearchFilter(searchText) {
        employeeRows.forEach(function (row) {
            const firstNameCell = row.querySelector('.employee-firstName');
            const lastNameCell = row.querySelector('.employee-lastName');
            const firstName = firstNameCell.textContent.toLowerCase();
            const lastName = lastNameCell.textContent.toLowerCase();

            const searchFilterMatch = firstName.includes(searchText) || lastName.includes(searchText);

            if (searchFilterMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.trim().toLowerCase();
        applySearchFilter(searchText);
    });

});
