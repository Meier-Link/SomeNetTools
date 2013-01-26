/**
 * actions.js
 * Manage interaction on html files
 */

$(function() {
  console.log("jQuery ok");

  $("#ip").keyup(function()
  {
    console.log($("#ip").val());
    console.log(checkEntries($("#ip").val(), $("#mask").val()));
    if (checkEntries($("#ip").val(), $("#mask").val()) == true)
    {
      console.log("in ok");
      $("#submit").removeAttr('disabled');
    }
  });

  $("#mask").keyup(function()
  {
    console.log($("#mask").val());
    if (checkEntries($("#ip").val(), $("#mask").val()) == true)
    {
      $("#submit").removeAttr('disabled');
    }
  });

  $("#submit").click(function()
  {
    if (checkEntries($("#ip").val(), $("#mask").val()) == true)
    {
      var inIP = $("#ip").val().split(".");
      var inMask = $("#mask").val().split(".");

      var cidr = octet2cidr(inMask);

      var subnetId = subnetID(inIP, inMask);

      var wildcard = wildcardMask(inMask);

      var broadcastAddr = broadcast(inIP, wildcardMask);

      var startIP = startingIP(inIP, inMask);
      var endIP = endingIP(inIP, wildcard);

      var hostNb = hostCount(inMask);

      var outIP = inIP.join(".") + " / " + cidr;
      var outMask = cidr2octet(cidr).join(".");
      //console.log("outMask: ", outMask);
 
      var outSubnetId = subnetId.join(".");
      var outWildcard = wildcard.join(".");

      $("#ip-addr").html(outIP);
      $("#mask-dis").html(outMask);
      $("#sub-id").html(outSubnetId);
      $("#broad-addr").html(broadcastAddr.join("."));
      $("#host-addr-from").html(startIP.join("."));
      $("#host-addr-to").html(endIP.join("."));
      $("#wildcard-mask").html(outWildcard);
      $("#nb-hosts").html(hostNb);

      $("#result").css("display", "block");
    }

      $("#result").css("display", "block");
  });
});
