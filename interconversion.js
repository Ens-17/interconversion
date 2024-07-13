document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('uscFile');
    const format = document.getElementById('format').value;
    
    if (fileInput.files.length === 0) {
        alert('ファイルを選択してください');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        const blob = new Blob([content], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        
        if (format === 'ched') {
            link.download = file.name.replace('.usc', '.usc');
        } else if (format === 'mmw') {
            link.download = file.name.replace('.usc', '.usc');
        }

        link.click();
        URL.revokeObjectURL(link.href);
    };

    reader.readAsArrayBuffer(file);
});
