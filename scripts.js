// Auto-update copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const copyrightText = `© ${startYear}-${currentYear} Vishwank Chinnam. All rights reserved.`;
    
    // Update both copyright instances
    const topCopyright = document.getElementById('copyright-year');
    const bottomCopyright = document.getElementById('copyright-year-bottom');
    
    if (topCopyright) {
        topCopyright.textContent = copyrightText;
    }
    
    if (bottomCopyright) {
        bottomCopyright.textContent = copyrightText;
    }
}

// Run on page load
updateCopyrightYear();
