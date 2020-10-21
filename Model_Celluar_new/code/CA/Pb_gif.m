% %%%%%%%%%% Initialization %%%%%%%%%%
% Attraction
miu_a = 40;
sigma_a = 10;
map_attract = map_produce(miu_a,sigma_a);
map_attract_alt = map_expand(map_attract);

% Distribution
D = 5; % Interval cell number (diatance=50m)
N_0 = 10000; % Number of earthworms released in each cell
map_ori = ew_release(N_0,D); % interval_each
map_now = map_ori;
map_now_alt = map_expand(map_now);

% Pb
rol_soil = 1500; % Soil density(kg/m^3) (1.5g/cm^3)
depth = 0.10; % The depth of the treated soil(m)
Length = 5; % The depth of the treated soil(m)
V_soil = Length*Length*depth;
c_Pb = (300-20)+40*rand(100,100); % The initial concentration of Pb in soil: 300(-20~+20)(mg/kg) rand
map_Pb_0 = V_soil * rol_soil * c_Pb; % (mg)
map_Pb_alt = map_expand(map_Pb_0);

%%%%%%%%%% Calculate %%%%%%%%%%
time = 30*2; % duration: 2 months
count_num = 1;
degree = zeros(1,time);
for i = 1:time
    map_now_alt = ew_spread(map_now_alt,map_attract_alt);
    map_attract_alt = attract_wave(map_attract_alt);
    map_Pb_alt = delta_Pb(map_Pb_alt,map_now_alt);
    map_Pb = map_Pb_alt(2:101,2:101);
    map_Pb_ratio = map_Pb ./ map_Pb_0;
    degree(i) = mean(map_Pb_ratio(:));
%     % draw
%     imagesc(map_Pb_ratio)
%     % attribute
%     title('The ratio of Pb within 2 months ','FontSize',18)
%     colorbar
%     colormap(parula)
%     grid on;
%     set(gca, 'XTick', 0:1:100,'FontSize',6);
%     set(gca, 'YTick', 0:1:100,'FontSize',6);
%     axis equal;
%     saveas(gcf,num2str(count_num),'jpg');
%     count_num = count_num + 1;
end

% num = count_num - 1;
% for i = 1:num
%     str = strcat(num2str(i),'.jpg');
%     A = imread(str);
%     [I,map] = rgb2ind(A,256);
%     if(i == 1)
%         imwrite(I,map,'E:\个人文档\大学论文\iGEM2020\Code\CA_1 result\Pb_gif.gif','DelayTime',0.1,'LoopCount',Inf)
%     else
%         imwrite(I,map,'E:\个人文档\大学论文\iGEM2020\Code\CA_1 result\Pb_gif.gif','WriteMode','append','DelayTime',0.1)
%     end
% end

figure
plot(1:time,degree,'-r','LineWidth',2);
title('The ratio of Pb within 2 months ')
xlabel('time(days)');
ylabel('Percentage of lead residue');