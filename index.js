var mental = $(".mental").val();
var physical = $(".physical");
var ethnicity = $(".ethnicity");
var current = localStorage.getItem(".mental");
var butt = $(".but");
$("#Hawk").hide();
$(".winter").hide();
//$(".daredevil").hide();
$(".raven").hide();
$(".hulk").hide();
$(".wasp").hide();
$(".ironman").hide();
$(".legion").hide();
$(".daredevil").hide();
$(".wonderwoman").hide();
$(".falcon").hide();
$(".blackpanther").hide();
$(".mirage").hide();
$(".Shang-chi").hide();
$(".katana").hide();
$(".haddad").hide();
$(".dust").hide();
$(".milesmorales").hide();
$(".magneto").hide();
$(".wonderwoman").hide();
$(".msmarvel").hide();
$(".shapandar").hide();
$(".capamerica").hide();
$(".doclight").hide();
$(".thehulk").hide();
$(".supergirl").hide();
$(".nianal").hide();
$(".loki").hide();
$(".northstar").hide();
$(".batwoman").hide();
$(".valkyrie").hide();
$(".deadpool").hide();
$(".tremor").hide();
$(".batman").hide();
$(".deadpool").hide();
$(".blackwidow").hide();
$(".spiderman").hide();
$(".wave").hide();
$(".storm").hide();
$(".professorx").hide();
$(".ironmantwo").hide();
$(".deadpooltwo").hide();
$(".Misterfantastic").hide();














//butt.on("click", showsh);



// function updateStorage(mental) {
//   localStorage.setItem('color', color);
// }

// $("#mental").on("change", function() {
//   $("#fil").html($('#mental option:selected').text());
// });
// $('#mental option:selected').text();
// if (physical == "amputee") {
//   $(".Hawkeye").show();
// }



function reload() {
    setTimeout("location.reload(true);");
}

$("#physical").on("change", function() {
  if ($('#physical option:selected').text() == "amputee") {
    $(".winter").show();
    $("#Hawk").hide();
    $(".daredevil").hide();
    $(".legion").hide();
  }
  else if ($('#physical option:selected').text() == "Deaf") {
    $(".winter").hide();
    $("#Hawk").show();
    $(".daredevil").hide();
    $(".legion").hide();
  }
  else if ($('#physical option:selected').text() == "Blind") {
    $(".winter").hide();
    $("#Hawk").hide();
    $(".daredevil").show();
    $(".legion").hide();
  }
  else if ($('#physical option:selected').text() == "autistic") {
    $(".winter").hide();
    $("#Hawk").hide();
    $(".daredevil").hide();
    $(".legion").show();
  }
  });

$("#mental").on("change", function() {

    if ($('#mental option:selected').text() == "Depression") {
      $(".raven").show();
      $(".hulk").hide();
      $(".wasp").hide();
      $(".ironman").hide();
      $(".legion").hide();
    }
      else if ($('#mental option:selected').text() == "Anxiety"){
        $(".hulk").show();
        $(".raven").hide();
        $(".wasp").hide();
        $(".ironman").hide();
        $(".legion").hide();
      }
      else if ($('#mental option:selected').text() == "Bipolar"){
        $(".wasp").show();
        $(".raven").hide();
        $(".hulk").hide();
        $(".ironman").hide();
        $(".legion").hide();
      }
      else if ($('#mental option:selected').text() == "PTSD"){
        $(".ironman").show()
        $(".raven").hide();
        $(".hulk").hide();
        $(".wasp").hide();
        //$(".ironman").hide();
        $(".legion").hide();
      }
      else if ($('#mental option:selected').text() == "autistic"){
        $(".legion").show();
        $(".raven").hide();
        $(".hulk").hide();
        $(".wasp").hide();
       $(".ironman").hide();
      //  $(".legion").hide();
      }
    });

    $("#ethnicity").on("change", function() {
        if ($('#ethnicity option:selected').text() == "African American") {
          $(".falcon").show();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").hide();
          $(".Shang-chi").hide();
          $(".katana").hide();
          $(".wave").hide();
               $(".haddad").hide();
        }
        else if ($('#ethnicity option:selected').text() == "African") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").show();
          $(".mirage").hide();
          $(".Shang-chi").hide();
          $(".katana").hide();
          $(".wave").hide();
          $(".haddad").hide();

        }
        else if ($('#ethnicity option:selected').text() == "Chinese") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").hide();
          $(".Shang-chi").show();
          $(".katana").hide();
          $(".wave").hide();
          $(".haddad").hide();

        }
        else if ($('#ethnicity option:selected').text() == "Japanese") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").hide();
          $(".Shang-chi").hide();
          $(".katana").show();
          $(".wave").hide();
          $(".haddad").hide();
        }
        else if ($('#ethnicity option:selected').text() == "Indian") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").hide();
          $(".Shang-chi").hide();
          $(".katana").hide();
          $(".wave").hide();
          $(".haddad").show();

        }
        else if ($('#ethnicity option:selected').text() == "Native American") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").show();
          $(".Shang-chi").hide();
          $(".katana").hide();
          $(".wave").hide();
          $(".haddad").hide();
        }
        else if ($('#ethnicity option:selected').text() == "Fillipino") {
          $(".falcon").hide();
          $(".wonderwoman").hide();
          $(".blackpanther").hide();
          $(".mirage").hide();
          $(".Shang-chi").hide();
          $(".katana").hide();
          $(".wave").show();
          $(".haddad").hide();
        }
      });

      $("#religion").on("change", function() {
          if ($('#religion option:selected').text() == "Jewish") {
            $(".magneto").show();
            $(".msmarvel").hide();
            $(".shapandar").hide();
            $(".capamerica").hide();
            $(".doclight").hide();

          }

        else if ($('#religion option:selected').text() == "Muslim") {
            $(".magneto").hide();
            $(".msmarvel").show();
            $(".shapandar").hide();
            $(".capamerica").hide();
            $(".doclight").hide();

          }
          else if ($('#religion option:selected').text() == "Hindu") {
              $(".magneto").hide();
              $(".msmarvel").hide();
              $(".shapandar").show();
              $(".capamerica").hide();
              $(".doclight").hide();

            }
            else if ($('#religion option:selected').text() == "Christian") {
                $(".magneto").hide();
                $(".msmarvel").hide();
                $(".shapandar").hide();
                $(".capamerica").show();
                $(".doclight").hide();
              }
              else if ($('#religion option:selected').text() == "Buddhist") {
                  $(".magneto").hide();
                  $(".msmarvel").hide();
                  $(".shapandar").hide();
                  $(".capamerica").hide();
                  $(".doclight").show();
                }
              });

              $("#GenderIdentity").on("change", function() {
                  if ($('#GenderIdentity option:selected').text() == "He / His") {
                    $(".thehulk").show();
                    $(".supergirl").hide();
                    $(".nianal").hide();
                    $(".loki").hide();
                  }
                else  if ($('#GenderIdentity option:selected').text() == "She / her") {
                    $(".thehulk").hide();
                    $(".supergirl").show();
                    $(".nianal").hide();
                    $(".loki").hide();
                  }
                  if ($('#GenderIdentity option:selected').text() == "He / His") {
                    $(".thehulk").show();
                    $(".supergirl").hide();
                    $(".nianal").hide();
                    $(".loki").hide();
                  }
                  if ($('#GenderIdentity option:selected').text() == "Transgender") {
                    $(".thehulk").hide();
                    $(".supergirl").hide();
                    $(".nianal").show();
                    $(".loki").hide();
                  }
                  if ($('#GenderIdentity option:selected').text() == "Genderfluid") {
                    $(".thehulk").hide();
                    $(".supergirl").hide();
                    $(".nianal").hide();
                    $(".loki").show();
                  }
                });

                $("#SexualOrientation").on("change", function() {
                    if ($('#SexualOrientation option:selected').text() == "Gay") {
                      $(".northstar").show();
                      $(".batwoman").hide();
                      $(".valkyrie").hide();
                      $(".deadpool").hide();
                      $(".tremor").hide()
                    }
                  else if ($('#SexualOrientation option:selected').text() == "Lesbian") {
                      $(".northstar").hide();
                      $(".batwoman").show();
                      $(".valkyrie").hide();
                      $(".deadpool").hide();
                      $(".tremor").hide()
                    }
                    else if ($('#SexualOrientation option:selected').text() == "Bi-Sexual") {
                        $(".northstar").hide();
                        $(".batwoman").hide();
                        $(".valkyrie").show();
                        $(".deadpool").hide();
                        $(".tremor").hide()
                      }
                      else if ($('#SexualOrientation option:selected').text() == "Pan-Sexual") {
                          $(".northstar").hide();
                          $(".batwoman").hide();
                          $(".valkyrie").hide();
                          $(".deadpool").show();
                          $(".tremor").hide()
                        }
                      else if ($('#SexualOrientation option:selected').text() == "Asexual") {
                            $(".northstar").hide();
                            $(".batwoman").hide();
                            $(".valkyrie").hide();
                            $(".deadpool").hide();
                            $(".tremor").show()
                          }
                        });

                        $("#PersonalHistory").on("change", function() {
                            if ($('#PersonalHistory option:selected').text() == "Orphan") {
                              $(".batman").show();
                              $(".blackwidow").hide();
                              $(".spiderman").hide();
                              $(".deadpooltwo").hide()
                            }
                          else  if ($('#PersonalHistory option:selected').text() == "Divorce") {
                              $(".batman").hide();
                              $(".blackwidow").hide();
                              $(".spiderman").hide();
                              $(".deadpooltwo").show()
                            }
                            else if ($('#PersonalHistory option:selected').text() == "Abuse") {
                              $(".batman").hide();
                              $(".blackwidow").show();
                              $(".spiderman").hide();
                              $(".deadpooltwo").hide()
                            }
                          else  if ($('#PersonalHistory option:selected').text() == "Loss of a loved one") {
                              $(".batman").hide();
                              $(".blackwidow").hide();
                              $(".spiderman").show();
                              $(".deadpooltwo").hide()
                            }
                          });
