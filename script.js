document.addEventListener('DOMContentLoaded', function() {
    const umbrellaImage = document.getElementById('umbrella-image');
    const logoImage = document.getElementById('logo-image');
    const logoContainer = document.getElementById('logo-container');
    const logoUpload = document.getElementById('logo-upload');
    const fileName = document.getElementById('file-name');
    const loader = document.getElementById('loader');
    const colorSwitches = document.querySelectorAll('.color-swatch');
    const root = document.documentElement;
    
    // Current state
    let currentColor = 'yellow';
    
    // Set initial theme
    setThemeColor(currentColor);
    
    // Color swatch click handler
    colorSwitches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = this.dataset.color;
            const imageUrl = this.dataset.image;
            
            // Don't do anything if the same color is clicked
            if (currentColor === color) return;
            
            // Update active state
            colorSwitches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // Show loader
            umbrellaImage.style.opacity = '0.3';
            loader.style.display = 'block';
            
            // Change umbrella image with a delay to simulate loading
            setTimeout(() => {
                umbrellaImage.src = imageUrl;
                currentColor = color;
                setThemeColor(color);
                
                // Hide loader after image loads
                umbrellaImage.onload = function() {
                    umbrellaImage.style.opacity = '1';
                    loader.style.display = 'none';
                };
            }, 1000); // Simulate loading delay
        });
    });
    
    // Logo upload handler
    logoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Check file type
            const fileType = file.type;
            if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
                alert('Please upload only .jpg or .png files.');
                return;
            }
            
            // Check file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit.');
                return;
            }
            
            // Show file name
            fileName.textContent = file.name;
            
            // Show loader
            umbrellaImage.style.opacity = '0.3';
            loader.style.display = 'block';
            
            // Read and display the uploaded image
            const reader = new FileReader();
            
            reader.onload = function(event) {
                // Simulate loading delay
                setTimeout(() => {
                    logoImage.src = event.target.result;
                    logoImage.style.display = 'block';
                    
                    // Hide loader after processing
                    umbrellaImage.style.opacity = '1';
                    loader.style.display = 'none';
                }, 1500);
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Function to set theme color based on selected umbrella color
    function setThemeColor(color) {
        let primaryColor;
        
        switch(color) {
            case 'blue':
                primaryColor = '#00a5e3';
                break;
            case 'pink':
                primaryColor = '#e5017e';
                break;
            case 'yellow':
            default:
                primaryColor = '#ffd62c';
                break;
        }
        
       
        root.style.setProperty('--primary-color', primaryColor);

        if (color !== 'blue') {
            document.querySelector('.upload-button').style.backgroundColor = primaryColor;
        } else {
            document.querySelector('.upload-button').style.backgroundColor = '#00a5e3';
        }
    }
    
    // Handle umbrella image load
    umbrellaImage.onload = function() {
        umbrellaImage.style.opacity = '1';
    };
});