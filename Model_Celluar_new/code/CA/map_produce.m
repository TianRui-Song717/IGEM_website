function map_attract = map_produce(miu,sigma)
% map_attract = 100*rand(100,100); % rand(0-100)
% every cell represent 5m*5m
% miu=40, sigma=10;(0-80)
map_attract = miu+sigma*randn(100); % nomal
% imagesc(map_attract) % color_origin

% Img = zeros(100);
wet = zeros(100);
% Img_1=imread('map-1.png');
Img_2=imread('map-2.png');
Img = rgb2gray(Img_2);
for i = 1:100
    for j = 1:100
        wet(i,j) = Img(i,j);
    end
end

map_attract = map_attract + 0.02*wet;
for i = 1:100
    for j = 1:100
        if map_attract(i,j)<0
            map_attract(i,j)=0;
        end
        if map_attract(i,j)>80
            map_attract(i,j)=80;
        end
    end
end

% figure (1)
% imagesc(map_attract) % color_now
% title('Initial Attraction')

