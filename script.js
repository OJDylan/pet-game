$(document).ready(() => {
  // initial data
  var pet_info = {
    happiness: 40,
    hunger: 90,
    cleanliness: 70,
  };

  const max_attempts = 10;
  var attempts = 10;

  // update initial information
  updatePetInfo();
  updateStat();

  // button listeners
  $("#play-button").click(() => {
    checkMax("happiness", checkAttempts);
    updateStat();
  });

  $("#eat-button").click(() => {
    checkMax("hunger", checkAttempts);
    updateStat();
  });

  $("#clean-button").click(() => {
    checkMax("cleanliness", checkAttempts);
    updateStat();
  });

  // checking functions
  function checkAttempts() {
    if (attempts <= max_attempts && attempts > 0) {
      --attempts;
      return true;
    }
  }

  function checkMax(stat, operations) {
    if (pet_info[stat] == 100) {
      console.log(stat + " is already maxxed");
    }

    if (pet_info[stat] < 100) {
      if (operations()) {
        pet_info[stat] = pet_info[stat] + 10;
        updatePetInfo();
      }
    }
  }

  function updatePetInfo() {
    $("#happiness").text(pet_info.happiness);
    $("#hunger").text(pet_info.hunger);
    $("#cleanliness").text(pet_info.cleanliness);
    $("#attempts").text(attempts);
  }

  function updateStat() {
    let countMax = 0;
    let item = 0;

    for (var key of Object.keys(pet_info)) {
      if (pet_info[key] == 100) {
        countMax = countMax + 1;
      }

      if (pet_info[key] <= 40) {
        $("#" + Object.keys(pet_info)[item] + "-low-level").attr(
          "style",
          "background-color:red"
        );
        $("#" + Object.keys(pet_info)[item] + "-med-level").attr(
          "style",
          "background-color:#E8E8E8"
        );
        $("#" + Object.keys(pet_info)[item] + "-high-level").attr(
          "style",
          "background-color:#E8E8E8"
        );
      } else if (pet_info[key] >= 80) {
        $("#" + Object.keys(pet_info)[item] + "-low-level").attr(
          "style",
          "background-color:green"
        );
        $("#" + Object.keys(pet_info)[item] + "-med-level").attr(
          "style",
          "background-color:green"
        );
        $("#" + Object.keys(pet_info)[item] + "-high-level").attr(
          "style",
          "background-color:green"
        );
      } else {
        $("#" + Object.keys(pet_info)[item] + "-low-level").attr(
          "style",
          "background-color:orange"
        );
        $("#" + Object.keys(pet_info)[item] + "-med-level").attr(
          "style",
          "background-color:orange"
        );
        $("#" + Object.keys(pet_info)[item] + "-high-level").attr(
          "style",
          "background-color:#E8E8E8"
        );
      }

      ++item;
    }

    if (countMax === 3) {
      $(".pet").attr("src", "miltank-happy2.png");
      $(".pet").attr("style", "width:10rem");
      $(".alert").attr("style", "display: visible");
    }
  }
});
