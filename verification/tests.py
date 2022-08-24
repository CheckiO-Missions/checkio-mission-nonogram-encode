"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [[' X X ',
                       'X X X',
                       ' X X ']],
            "answer": [[[0, 1, 0, 1, 0],
                        [1, 1, 1, 1, 1]],
                       [[0, 1, 1],
                        [1, 1, 1],
                        [0, 1, 1]]]
        },
        {
            "input": [['X']],
            "answer": [[[1]],
                       [[1]]]
        }
    ],
    "Extra": [
        {
            "input": [['XX   X',
                       ' X XXX',
                       ' X XX ',
                       ' XXX  ',
                       ' XXXX ',
                       '   X  ']],
            "answer": [[[0, 0, 0, 0, 2, 0],
                        [1, 5, 2, 5, 1, 2]],
                       [[2, 1],
                        [1, 3],
                        [1, 2],
                        [0, 3],
                        [0, 4],
                        [0, 1]]]
        },
        {
            "input": [['  X         X  ',
                       ' XX         XX ',
                       'XXXXXXXXXXXXXXX',
                       ' XX         XX ',
                       '  X         X  ']],
            "answer": [[[1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1]],
                       [[1, 1],
                        [2, 2],
                        [0, 15],
                        [2, 2],
                        [1, 1]]]
        }
    ]
}
