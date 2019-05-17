import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { COLOR, BLOCK_TYPE_TARGET } from '../utils/constants';

function rect(props) {
    const { ctx, x, y, width, height, color, alpha } = props;
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 1;
}

class Game extends Component {
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        this.resetCanvas();
        this.drawGrid();
        this.drawBlocks();
        //this.test();
    }

    test() {
        const { anim } = this.props;
        const ctx = this.canvas.getContext('2d');
        ctx.font = '30px Arial';
        ctx.fillText('' + anim, 50, 50);
    }

    resetCanvas() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getBlockWidth() {
        return this.canvas.width / this.props.size;
    }
    getBlockHeight() {
        return this.canvas.height / this.props.size;
    }

    getPaddingVertical() {
        return this.getBlockHeight() * 0.05;
    }

    getPaddingHorizontal() {
        return this.getBlockWidth() * 0.05;
    }

    drawGrid() {
        const { size } = this.props;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                this.drawBlock(x, y, '#E0E0E0');
            }
        }
    }

    drawBlock(x, y, color, alpha) {
        const ctx = this.canvas.getContext('2d');
        let posX = x * this.getBlockWidth();
        let posY = y * this.getBlockHeight();
        posX += this.getPaddingHorizontal();
        posY += this.getPaddingVertical();
        let width = this.getBlockWidth() - this.getPaddingHorizontal() * 2;
        let height = this.getBlockHeight() - this.getPaddingVertical() * 2;

        rect({
            ctx,
            x: posX,
            y: posY,
            width,
            height,
            color,
            alpha
        });
    }

    drawBlocks() {
        const { blocks, anim, animValue } = this.props;
        for (let i = 0; i < blocks.size; i++) {
            let block = blocks.get(i);
            let color = COLOR[block.color];
            let x = block.x;
            let y = block.y;
            if (block.lastX != null) {
                x = block.lastX + (block.x - block.lastX) * (anim - animValue);
            }
            if (block.lastY != null) {
                y = block.lastY + (block.y - block.lastY) * (anim - animValue);
            }
            this.drawBlock(
                x,
                y,
                color,
                block.type === BLOCK_TYPE_TARGET ? 0.25 : 1
            );
        }
    }

    render() {
        return (
            <div className={'mt-3'}>
                <canvas
                    ref={ref => (this.canvas = ref)}
                    width={320}
                    height={320}
                />
            </div>
        );
    }
}

Game.propTypes = {
    size: PropTypes.number.isRequired,
    blocks: PropTypes.instanceOf(List).isRequired,
    anim: PropTypes.object,
    animValue: PropTypes.number
};

export default Game;
