Description:
// alrightbot is a Slack Bot that does something nifty.

Dependencies:
// None

Configuration:
// None

Commands:
module.exports = function(robot) {
  robot.respond(/Are the Warriors any good?/, function(res) {
    return res.send("You're joking, right?");
  });
};
