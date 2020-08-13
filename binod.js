(() => {
  const name = "Pritam Ghosh";

  console.log(
    `${(typeof !name).toString().toUpperCase().substring(0, 1)}${
      (name.length / 0).toString().toLowerCase().split("f")[0]
    }${name.match(/([oops!])\w+/)[1]}${(typeof name[-1]).toString().slice(-1)}`
  );
})();
