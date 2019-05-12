import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

function rect(props) {
    const { ctx, x, y, width, height, color } = props;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
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
    }

    resetCanvas() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.getBlockWidth(), this.getBlockHeight());
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
        const ctx = this.canvas.getContext('2d');

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                let posX = x * this.getBlockWidth();
                let posY = y * this.getBlockHeight();
                posX += this.getPaddingHorizontal();
                posY += this.getPaddingVertical();
                let width =
                    this.getBlockWidth() - this.getPaddingHorizontal() * 2;
                let height =
                    this.getBlockHeight() - this.getPaddingVertical() * 2;

                rect({
                    ctx,
                    x: posX,
                    y: posY,
                    width,
                    height,
                    color: '#E0E0E0'
                });
            }
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
    blocks: PropTypes.instanceOf(List).isRequired
};

export default Game;
