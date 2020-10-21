%%%%%%%%%% Symbol Description %%%%%%%%%%
% map_attract: Record the attraction of the environment to earthworms
% map_ori: Distribution of earthworms at the time of placement
% map_now: Record the distribution of earthworms at every moment
% map_Pb: Record the amount of Pb in the land

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
figure (2)
imagesc(map_now)
title('Initial Distribution of Earthworms')
colorbar
grid on;
set(gca, 'XTick', 0:1:100,'FontSize',4);
set(gca, 'YTick', 0:1:100,'FontSize',4);

% Pb
rol_soil = 1500; % Soil density(kg/m^3) (1.5g/cm^3)
depth = 0.10; % The depth of the treated soil(m)
Length = 5; % The depth of the treated soil(m)
V_soil = Length*Length*depth;
c_Pb = (300-20)+40*rand(100,100); % The initial concentration of Pb in soil: 300(-20~+20)(mg/kg) rand
map_Pb_0 = V_soil * rol_soil * c_Pb; % (mg)
% figure (3)
% imagesc(map_Pb_0)
% title('Initial Distribution of Pb')
% colorbar
% grid on;
% set(gca, 'XTick', 0:1:100,'FontSize',4);
% set(gca, 'YTick', 0:1:100,'FontSize',4);
map_Pb_alt = map_expand(map_Pb_0);

%%%%%%%%%% Calculate %%%%%%%%%%
time = 3*365; % duration: 2 months
% time = 10; % duration -- test
for i = 1:time
    map_now_alt = ew_spread(map_now_alt,map_attract_alt);
    map_attract_alt = attract_wave(map_attract_alt);
    map_Pb_alt = delta_Pb(map_Pb_alt,map_now_alt);
end
figure (4)
imagesc(map_now_alt)
title('Distribution of Earthworms at 2 months')
colorbar
grid on;
set(gca, 'XTick', 0:1:100,'FontSize',4);
set(gca, 'YTick', 0:1:100,'FontSize',4);

map_Pb = map_Pb_alt(2:101,2:101);
map_Pb_ratio = map_Pb ./ map_Pb_0;
figure (5)
imagesc(map_Pb_ratio)
title('The Ratio of Pb ')
colorbar
grid on;
set(gca, 'XTick', 0:1:100,'FontSize',4);
set(gca, 'YTick', 0:1:100,'FontSize',4);

% degree = mean(map_Pb_ratio(:));