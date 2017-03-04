var css = require('./style.scss');

var scale = 2
    circleRadius = scale*50
    outlineRadius = scale*75
    container = scale*400
    center = container/2
    barWidth  = scale*40
    barHeight = scale*8
    bars = 3;


var circleContainer = d3.select('#app').append('svg')
                                        .attr('width', container)
                                        .attr('height', container)
                                        .attr('class', 'circleContainer');
var outlineGradient = circleContainer.append('linearGradient')
                              .attr('id', 'outline-gradient')
                              .attr('gradientUnits','userSpaceOnUse')
                              .attr('x1', '0%')
                              .attr('y1', '0%')
                              .attr('x2', '100%')
                              .attr('y2', '100%');

outlineGradient.append('stop')
                    .attr('stop-opacity', 1)
                    .attr('stop-color', '#0072BB')
                    .attr('offset', 0);
outlineGradient.append('stop')
                    .attr('stop-opacity', .3)
                    .attr('stop-color', '#1E91D6')
                    .attr('offset', 1);

var circleGradient = circleContainer.append('radialGradient')
                              .attr('id', 'circle-gradient');

circleGradient.append('stop')
                    .attr('stop-color', '#8FC93A')
                    .attr('offset', '0%');
circleGradient.append('stop')
                    .attr('stop-color', '#4F772D')
                    .attr('offset', '95%');

var circle = circleContainer.append('circle')
                            .attr('cx', center)
                            .attr('cy',center)
                            .attr('r',circleRadius)
                            .style('stroke-width', 5*scale+'px')
                            .style('stroke-dasharray', 20*scale+'')
                            .attr('class', 'circle');

var outline = circleContainer.append('circle')
                            .attr('cx', center)
                            .attr('cy',center)
                            .attr('r', outlineRadius)
                            .style('stroke-width', 5*scale+'px')
                            .style('stroke-dasharray', 100*scale + ' ' + 50*scale)
                            .style('stroke','url(#outline-gradient)')
                            .attr('class', 'outline');

for (var i=1;i<=bars;i++){
  circleContainer.append('rect')
                  .attr('x', center-barWidth/2)
                  .attr('y', center-circleRadius + circleRadius/bars*i + barHeight*i-barHeight/2)
                  .attr('width', barWidth)
                  .attr('height', barHeight)
                  .attr('rx', scale*5)
                  .attr('ry', scale*10)
                  .style('stroke-width', scale+'px')
                  .attr('class', 'bar');
}
