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
time = 2*30; % duration: 2 months
% beta = 4:8 ;
b = (4*(1.2*1e-3)) : (1.2*1e-3) : (8*(1.2*1e-3));
degree = zeros(5,time);

for i = 1:5
    for j = 1:time
        map_now_alt = ew_spread(map_now_alt,map_attract_alt);
%         map_attract_alt = attract_wave(map_attract_alt);
        map_attract_alt = attract_wave_2(map_now_alt,map_attract_alt);
        map_Pb_alt = delta_Pb_flex(map_Pb_alt,map_now_alt,b(i));
        map_Pb = map_Pb_alt(2:101,2:101);
        map_Pb_ratio = ones(100) - map_Pb ./ map_Pb_0;
        degree(i,j) = mean(map_Pb_ratio(:));
    end
end

for i = 1:5
    hold on
    plot(1:time,degree(i,:),'LineWidth',2);
%     title('Sensitivity analysis of the probability coefficient of migration in and out ');
    xlabel('time(days)');
    ylabel('Purification Ratio of Pb');
    legend('beta=4','beta=5','beta=6','beta=7','beta=8');
end
hold off