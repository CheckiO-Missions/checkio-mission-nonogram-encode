requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function nonogramEncodeAnimation(tgt_node, data) {

            if (!data || !data.ext) {
                return
            }

            const input = data.in[0]
            const output = data.out
            const answer = data.ext.answer

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                outer_frame: {
                    'stroke-width': '2px',
                    'stroke': '#294270',
                },
                inner_grid: {
                    'stroke-width': '1px',
                    'stroke': '#4094c7',
                },
                number: {
                    hint: {
                        'font-family': 'sans-serif',
                        'font-weight': 'bold',
                        'stroke-width': 0,
                        'fill': '#294270',
                    },
                },
                colored_cell: {
                    'stroke-width': '0px',
                    'stroke': '#294270',
                    'fill': '#8fc7ed',
                },
            }

            /*----------------------------------------------*
             *
             * values
             *
             *----------------------------------------------*/
            const grid_size_px = 300
            const os = 10

            const width = input[0].length
            const height = input.length

            const hint_width = answer[1][0].length
            const hint_height = answer[0].length

            const unit = grid_size_px / Math.max(width + hint_width, height, hint_height)

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const paper = Raphael(tgt_node, grid_size_px+os*2, unit*(height+hint_height)+os*2, 0, 0)

            /*----------------------------------------------*
             *
             * cell
             *
             *----------------------------------------------*/
            // colored cell
            for (let x = 0; x < width; x += 1) {
                for (let y = 0; y < height; y += 1) {
                    if (input[y].slice(x, x+1) === 'X') {
                        paper.rect((x+hint_width)*unit+os, (y+hint_height)*unit+os, unit, unit).attr(attr.colored_cell)
                    }
                }
            }

            /*----------------------------------------------*
             *
             * grid
             *
             *----------------------------------------------*/
            // outer frame
            paper.rect(os+(unit*hint_width), os+(unit*hint_height),
                        unit*width, unit*height).attr(attr.outer_frame)

            // holizontal line
            for (let i = 0; i <= height; i += 1) {
                paper.path(['M', 0+os, i*unit+os+(hint_height*unit), 'h', unit*(width+hint_width)]).attr(attr.inner_grid)
            }

            // vertical line
            for (let j = 0; j <= width; j += 1) {
                paper.path(['M', j*unit+os+(hint_width*unit), 0+os, 'v', unit*(height+hint_height)]).attr(attr.inner_grid)
            }

            /*----------------------------------------------*
             *
             * hints
             *
             *----------------------------------------------*/
            // row hints
            for (let k = 0; k < height; k += 1) {
                for (let l = 0; l < hint_width; l += 1) {
                    const number = answer[1][k][l] || ""
                    paper.text(
                        l*unit+unit/2+os,
                        (k+hint_height)*unit+unit/2+os,
                        number).attr(attr.number.hint).attr(
                            {'font-size': 20*Math.max(0.3, unit/50)})
                }
            }

            // col hints
            for (let m = 0; m < width; m += 1) {
                for (let n = 0; n < hint_height; n += 1) {
                    const number = answer[0][n][m] || ""
                    paper.text(
                        (m+hint_width)*unit+unit/2+os,
                        n*unit+unit/2+os,
                        number).attr(attr.number.hint).attr(
                            {'font-size': 20*Math.max(0.3, unit/50)})
                }
            }
        }

        var $tryit;
        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'nonogram_encode',
            },
            animation: function($expl, data){
                nonogramEncodeAnimation(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
