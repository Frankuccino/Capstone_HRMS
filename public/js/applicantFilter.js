document.addEventListener('DOMContentLoaded', function () {
    const applicantRows = document.querySelectorAll('.applicant-row');
    const searchInput = document.getElementById('searchInput');
    const officeFilter = document.getElementById('officeFilter');
    const statusFilter = document.getElementById('statusFilter');
    const positionFilter = document.getElementById('positionFilter');

    function applyFilters() {
        const selectedOffice = officeFilter.value;
        const selectedStatus = statusFilter.value.toLowerCase();
        const searchText = searchInput.value.trim().toLowerCase();
        const selectedPosition = positionFilter.value.toLowerCase();

        applicantRows.forEach(function (row) {
            const applicantOfficeCell = row.querySelector('.applicant-office');
            const applicantOffice = applicantOfficeCell.textContent.trim();
            const applicantStatusCell = row.querySelector('.applicant-status');
            const applicantStatus = applicantStatusCell.textContent.toLowerCase();
            const applicantPositionCell = row.querySelector('.applicant-position');
            const applicantPosition = applicantPositionCell.textContent.trim();
            const firstName = row.querySelector('.applicant-firstName').textContent.toLowerCase();
            const lastName = row.querySelector('.applicant-lastName').textContent.toLowerCase();

            const searchFilterMatch = firstName.includes(searchText) || lastName.includes(searchText);
            const officeFilterMatch = selectedOffice === 'All' || applicantOffice === selectedOffice;
            const statusFilterMatch = selectedStatus === '' || applicantStatus === selectedStatus;
            const positionFilterMatch = selectedPosition === '' || applicantPosition.toLowerCase().startsWith(selectedPosition);

            if (officeFilterMatch && statusFilterMatch && searchFilterMatch && positionFilterMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', applyFilters);
    officeFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    positionFilter.addEventListener('change', applyFilters);

    // Initial filter application
    applyFilters();
});
