registerPaint('directional-hover', class {
    static get inputProperties() {
        return [
            '--x',
            '--y',
            '--startx',
            '--starty',
            '--pad',
            '--background-opacity',
            'border-image-outset'
        ];
    }
    paint(ctx, geom, properties) {
        let outset = Number.parseInt(properties.get('border-image-outset').toString());

        let width = geom.width - (outset * 2);
        let height = geom.height - (outset * 2);

        let x = properties.get('--x').value;
        let y = properties.get('--y').value;

        /*
        if (properties.get('--x').unit == 'percent') {
            x *= width / 100;
        }
        if (properties.get('--y').unit == 'percent') {
            y *= height / 100;
        }
        */


        let startx = properties.get('--startx').value;
        let starty = properties.get('--starty').value;
        let pad = properties.get('--pad').value;

        let distance = Math.sqrt(Math.pow(width / 2 - startx, 2) + Math.pow(height / 2 - starty, 2));

        let start = this.getStartingPoints({x: width / 2, y: height / 2}, {x, y}, distance, pad);
        x = start.x;
        y = start.y;

        let opacity = properties.get('--background-opacity').value;

        //ctx.fillStyle = 'rgba(255,20,147, ' + opacity + ')';
        ctx.fillStyle = 'rgba(255,255,255, ' + opacity + ')';
        ctx.fillRect(x + outset - (width / 2), y + outset - (height / 2), width, height)
    }

    getStartingPoints (center, mouse, distance, pad) {
        let distanceRatio = pad / distance;
        let x = center.x + distanceRatio * (mouse.x - center.x);
        let y = center.y + distanceRatio * (mouse.y - center.y);
        return {x, y};
    }

})
