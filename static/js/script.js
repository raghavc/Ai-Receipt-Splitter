document.addEventListener("DOMContentLoaded", function() {
  // ParticlesJS Config Object
  var particle_config = {
    
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 600
              }
          },
          color: {
              value: "white" // This will be overridden by the color pairs below
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#27ae60"
              },
              polygon: {
                  nb_sides: 9
              },
          },
          opacity: {
              value: 1,
              random: false,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: false,
              distance: 150,
              color: "#8e8e8e",
              opacity: 0.4,
              width: 0.5
          },
          move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
          },
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: false,
                  mode: "repulse"
              },
              onclick: {
                  enable: true,
                  mode: "push"
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: true
      
  };

  // Random color pair selection for particles
  var color_pairs = [
      ["#000000", "#000000"],
      ["#000000", "#000000"],
      ["#000000", "#000000"],
      ["#000000","#000000"],
      ["#000000", "#000000"]

  ];

  var selected_pair = color_pairs[Math.floor(Math.random() * color_pairs.length)];
  particle_config.particles.color.value = selected_pair[0];
  particle_config.particles.line_linked.color = selected_pair[1];

  // Initialize particles.js with the config object
  particlesJS("particles-js", particle_config);

  const submitButton = document.getElementById('submitBtn'); // Ensure this is the correct ID of your submit button
  const imageInput = document.getElementById('imageInput'); // Ensure this is the correct ID of your image input
  const loadingSpinner = document.getElementById('loadingSpinner'); // Ensure this is the correct ID of your loading spinner div

  // Change submit button color when an image is selected
  imageInput.addEventListener('change', function(event) {
      if (this.files && this.files.length > 0) {
          submitButton.style.backgroundColor = 'green';
      } else {
          submitButton.style.backgroundColor = 'red';
      }
  });

  // Form submission handling
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = new FormData(this);

      // Show loading spinner
      loadingSpinner.style.display = 'block';

      fetch('/submit', {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not OK');
          }
          return response.json();
      })
      .then(data => {
          if (data.error) {
              document.getElementById('resultContent').textContent = "Error: " + data.error;
          } else {
              document.getElementById('resultContent').textContent = data.result;
          }
          document.getElementById('result').style.display = 'block';
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('resultContent').textContent = "Error: " + error;
          document.getElementById('result').style.display = 'block';
      })
      .finally(() => {
          // Hide loading spinner
          loadingSpinner.style.display = 'none';
      });
  });
});