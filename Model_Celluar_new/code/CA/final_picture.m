% Draw the final renderings
xi = 1:5:100; % Interval cell number
yi = 500:500:10000; % Number of earthworms released in each cell
m = length(xi);
n = length(yi);
[x,y]=meshgrid(xi,yi);
z = zeros(n,m);
% z = clean(x,y);

for i = 1:n
    for j = 1:m
        z(i,j) = clean(xi(i),yi(j));
    end
end

figure
surf(x',y',z);
title('Percentage of Pb Purification Under Different Treatment Combinations')
xlabel('Distance / 5m')
ylabel('Number of Earthworms Per Feeding Point')

%%%%%%%%%%% Rotation %%%%%%%%%%
% axis vis3d % Fix the current coordinate scale
% shading interp
% filename = 'E:\个人文档\大学论文\iGEM2020\Code\CA_1 result\final picture rotation.gif';
% for i=1:360
%     camorbit(1,0,'camera')
%     drawnow
%     M=getframe;
%     nn=frame2im(M);
%     [imind,cm]=rgb2ind(nn,256);
%     if i == 1
%         imwrite(imind,cm,filename,'gif', 'Loopcount',inf);
%     else
%         imwrite(imind,cm,filename,'gif','WriteMode','append');
%     end
% end 