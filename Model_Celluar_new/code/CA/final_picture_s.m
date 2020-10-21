% Draw the final renderings
xi = 1:10; % Interval cell number
yi = 500:1000:10000; % Number of earthworms released in each cell
m = length(xi);
n = length(yi);
[x,y]=meshgrid(xi,yi);
z = zeros(n,m);
% z = clean(x,y);

for a = 1:n
    for b = 1:m
        z(a,b) = clean(xi(a),yi(b));
    end
end

figure
surf(x',y',z);
title('Percentage of Pb Purification Under Different Treatment Combinations')
xlabel('Distance / 5m')
ylabel('Number of Earthworms Per Feeding Point')