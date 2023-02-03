const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 11,
        c: [
          {
            v: 12,
            c: [
              {
                v: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 7,
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 14,
      },
    ],
  },
];

function treeSum(tree) {
  let sum = 0;
  let stack = [];
  tree.forEach((el) => stack.push(el));

  while (stack.length) {
    let el = stack.pop();
    sum += el.v;
    if (el.c) {
      el.c.forEach((el) => stack.push(el));
    }
  }
  return sum;
}

console.log(treeSum(tree));
